const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(input.split(' ').filter(str => str.length > 0).length);