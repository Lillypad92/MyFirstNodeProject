// One method to require info from people.js 
// const { people, ages} = require('./people');
// console.log(people, ages);

// Another method to require from people.js
// 
const xyz = require('./people');
console.log(xyz);

const os = require('os');

console.log(os.platform(), os.homedir());
