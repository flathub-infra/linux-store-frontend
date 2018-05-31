const puppeteer = require('puppeteer');
const { join, dirname } = require('path');
const { readFile, exists, writeFile, mkdir } = require('mz/fs')
const { uniq, difference } = require('lodash');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const URL = require('url').URL;

async function main() {

  // Launching Puppeteer
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  console.log(`Started browser!`);

  // Creating a new Tap/Page
  const page = await browser.newPage();



  var pages = [];

  fs.readFileSync(join(process.cwd(), 'src/assets', 'sitemap.txt')).toString().split("\n").forEach(function (line, index, arr) {
    if (index === arr.length - 1 && line === "") { return; }
    console.log(index + " " + line);
    pages.push(line);
  });
  console.log("end. pages.lenght:" + pages.length);


  console.log("out of readFIle");

  for (let i = 0; i < pages.length; i++) {

    console.log('Processing page:' + pages[i]);
    
    // Render the page and getting the html with Chromium
    //await page.goto(value);
    //await page.goto(pages[i], { waitUntil: "load" });
    //await page.goto(pages[i], {waitUntil: 'networkidle0'});
    await page.goto(pages[i], {waitUntil: 'networkidle2'});
    //const result = await page.evaluate(() => document.documentElement.outerHTML);
    const result = await page.content();

    // Defining the html file name that will be created
    var currentURL = new URL(`${pages[i]}`);
    const file = join(process.cwd(), 'dist-prerender', currentURL.pathname);
    //const dir = dirname(file);

    //console.log(`Writing to dir  ${dir}`);

    // Test if the directory exist, if not create the directory
    //if (!(await exists(dir)))
    //  await mkdir(dir);

    // Write the rendered html file
    console.log('writing file: ' + file);
    await writeFile(file, result);

    console.log(`Writed ${file}`);


  }

  // Closes Chromium  
  await browser.close();

  await console.log('Bye!');

}

// Run the main asyn function
main()
  .then(() => console.log('All right!'))
  .catch(err => {
    console.error('Err', err);
    process.exit(1);
  });
