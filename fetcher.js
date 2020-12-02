const fs = require('fs');
const readline = require('readline');
const request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let arr = process.argv.slice(2);
const url = arr[0];
const file = arr[1];

request(url, (error, resp, body) => {
  let data = body;
  fs.writeFile(file, data, (err) => {
    if(err) throw err;
    const size = fs.statSync(file).size;
    console.log(` Downloaded and saved ${size} bytes to ${file}.`);
  })
})
rl.close();
