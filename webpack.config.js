const path = require('path');

module.exports = {

 entry:'./src/index.js',

 mode: 'development',

 entry: {

   index: './src/index.js',

   another: './src/another-module.js',

 },
  output: {

   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};