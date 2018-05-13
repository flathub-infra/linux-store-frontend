// Workaround for angular-cli bug 9340 by Domas Trijonis
// https://github.com/angular/angular-cli/issues/9340#issuecomment-384282305
const fs = require('fs');
// due to https://github.com/angular/angular-cli/issues/9340
// uglifyjs-webpack-plugin@1.1.5 and uglify-es@3.2.2 are added to package.json
console.info('Removing uglifyjs-webpack-plugin and uglify-es from angular cli node_modules (workaround for angular-cli bug 9340)');
fs.renameSync('./node_modules/@angular/cli/node_modules/uglify-es', './node_modules/@angular/cli/node_modules/uglify-es-unused');
fs.renameSync('./node_modules/@angular/cli/node_modules/uglifyjs-webpack-plugin', './node_modules/@angular/cli/node_modules/uglifyjs-webpack-plugin-unused');