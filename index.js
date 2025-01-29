// 22 Jan 2025......... way of importing modules in ECMA Script............//

/*
console.log ("Hello world...");
const readline = require ("readline")   // -------> require is used to import modules 

const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
})

// rl.question ("Enter Name : ", (data) => {
//     console.log("Hello :)", data);         ----------> printed inside the function

let variable = ""
rl.question ("Enter Name : ", (data) => {
    console.log("Hello", data)
    variable = data;
})

console.log(variable)
*/


// -------------------------- OS  MODULE ---------------------------------
/*
const os = require("os")
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.cpus());
console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());
console.log(os.version());
console.log(os.freemem());
*/


// -------------------------- Path  MODULE ---------------------------------
const { log } = require("console");
const path = require("path")     //import path

// console.log(__dirname)           //cwd
// console.log(__filename)          //cw file

// console.log(path.basename("C:\Users\raja\Downloads\fourth sem\internship\backend\Server\index.js"));
// console.log(path.extname('sample.txt'));
console.log(path.join("folder","index.js"));          //important - join
console.log(path.parse("C:\Users\raja\Downloads\fourth sem\internship\backend\Server\index.js"));
console.log(path.parse("C:\index.js"));

