// // Bring in the Dictionary
// const fs = requre('fs'); // Bring in fs module 
// const output = fs.readFileSync('data.txt', utf-8); // Pull text file into program & make it readable
// console.log(output)


// VARIABLESVARIABLESVARIABLES //
let words = []; // prepopulating a words array so that I can 
let board = [[], [], [], [], []]; 
let turn = 1;
let killCard = output[1[1]]; // maybe have the 

// document.getElementById("guessInfo").innerHTML = "your turn is over."





// Homepage View

// pull in text file.
    // parse text fileq

// set up a 5x5 array of random numbers
    //these numbers will be used to access both the text file, and to set up & identify the squares

// Red & Blue team columns
    // number of cards left to guess
    // whose turn it is
    // statistics?

// H1: It's BLUE TEAM'S turn! (where "BLUE" is the color blue.)

// button to toggle the spymaster page.


////////////////////////////////////////////////        
// Shahzad's lesson on text files
////////////////////////////////////////////////
// // i need to create a json object out of the data.txt file.
// // const fs = requre('fs'); //bring in fs module from JS's inherant library

// // console.log(fs)
// // this console.log should give me a long list of things I can do with FS (including readFileSync)

// //const output = fs.readFileSync('data.txt');
// //console.log(output)
// // yikes, it give me a list of bytes, I think?

// // const output = fs.readFileSync('data.txt', 'utf-8');
// //console.log('the output', output) gives me the actual data, how it looks in the data file and sets that equal to "the output".

// // we need to take output, make it into an array, break things into strings, and then input that into an object. whew. 

// const output = fs.readFileSync('data.txt', 'utf-8')
//   .trim() //trims out extra spaces - output ends up with \ in between each column mark john\twaffle iron\
//   .split('\n')
//   .map(line => line.split('\t')) //splits each index into multiple strings ['mark john', 'waffle iron', '80', '2']
//   .reduce((customers, line) => {
//     customers[line[0]] = customers[line[0]] || [] 
//     customers[line[0]].push({
//       name: line[1],
//       price: line[2],
//       quantity: line[3]
//       // gives the output {
//       //   'mark john': [{name: knife, price: '10', quantity: '4'}], 'nikita smith': [{see above}]
//       }
//     })
//     return customers
//   }, {}) //gives the output {'mark john: [], "nikita smith": []'}
// //console.log('the output', output)
// // this gives us an array of strings, so it breaks up the information into each 




// Ben & David's lesson on importing functions
// main.js:
// const math = require ('./utils')
// math.addNums(1, 4)
// math.eatTaco()
// 10:44
// utils.js:
// function addNums(a, b){
//     return console.log(a + b);
// }
// function eatTaco(){
//     return console.log("YUMMYTACO")
// }
// module.exports = {
//     addNums,
//     eatTaco
// }




// TO GET THE NAME IN THE ARRAY: 
// document.getElementById(x).innerHTML