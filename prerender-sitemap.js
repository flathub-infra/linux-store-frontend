const puppeteer = require('puppeteer');
const { join, dirname } = require('path');
const { readFile, exists, writeFile, mkdir } = require('mz/fs')
const { uniq, difference } = require('lodash');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const url = require('url');

async function main() {
  
  
  // Launching Puppeteer
  const browser = await puppeteer.launch();
  
  console.log(`Started browser!`);
  
  // Creating a new Tap/Page
  const page = await browser.newPage();
  
  // Reading the sitemap file
  var instream = fs.createReadStream(join(process.cwd(), 'dist', 'sitemap'));
  var outstream = new stream;
  var rl = readline.createInterface(instream, outstream);
  
  rl.on('line', function(line) {
    // process line here
    console.log(`Processing ${line}`);

    // Requesting the first page in PAGES array
    //await page.goto(`${line}`);

    var currentURL  = new URL(`${line}`);

    
    // // Defining the html file name that will be created
    // const file = join(process.cwd(), 'dist', (p || 'index') + '.html');
    
    // const dir = dirname(file);
    
    // console.log(`Writing to dir  ${dir}`);
    
    // // Test if the directory exist, if not create the directory
    // if (!(await exists(dir)))
    // await mkdir(dir);
    
    // // Write the rendered html file
    // await writeFile(file, result);
    
    // console.log(`Writed ${file}`);
    
    
  });
  
  rl.on('close', function() {
    // do something on finish here
    
    // Closes Chromium
    browser.close();
  });
  
}

// Run the main asyn function
main()
.then(() => console.log('All right!'))
.catch(err => {
  console.error('Err', err);
  process.exit(1);
});
