const puppeteer = require('puppeteer');
const express = require('express');
const { join, dirname } = require('path');
const { readFile, exists, writeFile, mkdir } = require('mz/fs')
const { uniq, difference } = require('lodash');

// Defining some configuration
const PORT = 4000;
const HOST = `http://localhost:${PORT}`;

let PAGES = [''];
let RENDERED_PAGES = [];

async function main() {

  // Starting an Express.js server to serve the static files while puppeter prerender the pages
  const app = express();

  // Getting the html content from the index.html file
  const index = (await readFile(join(process.cwd(), 'dist', 'index.html'))).toString();

  // Serving the static files.
  app.get('*.*', express.static(join(process.cwd(), 'dist')));

  // Serving index.html, when a puppeters request the index page
  app.get('*', (req, res) => res.send(index));

  // Starting the express server
  const server = await (new Promise((resolve, reject) => {
    const s = app.listen(PORT, e => e ? reject(e) : resolve(s));
  }));

  console.log(`Started server ${HOST}!`);

  // Launching Puppeteer
  const browser = await puppeteer.launch();

  console.log(`Started browser!`);

  // Creating a new Tap/Page
  const page = await browser.newPage();

  do {
    const p = PAGES[0];

    // Requesting the first page in PAGES array
    await page.goto(`${HOST}/${p}`);

    // Getting the html content after the Chromium finish rendering.
    const result = await page.evaluate(() => document.documentElement.outerHTML);

    // Defining the html file name that will be created
    const file = join(process.cwd(), 'dist', (p || 'index') + '.html');

    const dir = dirname(file);

    console.log(`Writing to dir  ${dir}`);

    // Test if the directory exist, if not create the directory
    if (!(await exists(dir)))
      await mkdir(dir);

    // Write the rendered html file
    await writeFile(file, result);

    console.log(`Writed ${file}`);

    // Add this page to the RENDERED PAGES array
    RENDERED_PAGES = [...RENDERED_PAGES, p];

    // Set PAGES with the pages that still need to be rendered
    PAGES = difference(
      uniq(PAGES.concat(result.match(/href="\/[\/\w\d\-]*"/g).map(s => s.match(/\/([\/\w\d\-]*)/)[1]))),
      RENDERED_PAGES
    );

  } while (PAGES.length > 0);

  // Closes Chromium and finishes the express server.
  browser.close();
  server.close();
}

// Run the main asyn function
main()
  .then(() => console.log('All right!'))
  .catch(err => {
    console.error('Err', err);
    process.exit(1);
  });
