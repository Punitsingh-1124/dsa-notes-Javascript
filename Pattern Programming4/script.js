// process.stdout.write("hello ")
// process.stdout.write("world")

//example:
// let a = prompt("Enter a number")
// console.log(a);

// example:
// let prompt = require('prompt-sync')();
// let a = prompt("Enter a number")
// process.stdout.write(a)


// example:
//if  i want 5 star in line 
// console.log("*")
// console.log("*")
// console.log("*")
// console.log("*")
// console.log("*")
// console.log("*")
//if i want wartical line star
// process.stdout.write("*")
// process.stdout.write("*")
// process.stdout.write("*")
// process.stdout.write("*")
// process.stdout.write("*")

// example:
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//example:
//Question : Right angle trianglr
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }
//o/p
// Enter a number 6
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * * * 

//Question Right angle triangle in number
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j+ " ");
//     }
//     console.log();
// }
//O/p
// Enter a number 6
// 1 
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

//Question Right angle triangle in alphabet
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     let ascii = 65;
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(ascii)+ " ");
//         ascii++
//     }
//     console.log();
// }
//O/p
// Enter a number 6
// A 
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

//Question: inverted Right angle triangle
// exp:1
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i + 1; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }
// exp:2
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     for (let j = n; j >=i; j--) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }
//O/p
// Enter a number 6
// * * * * * * 
// * * * * *
// * * * *
// * * *
// * *
// *
// exp:3
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     for (let j = n; j >=i; j--) {
//         process.stdout.write(j+ " ");
//     }
//     console.log();
// }
//O/p
// Enter a number 6
// 6 5 4 3 2 1 
// 6 5 4 3 2
// 6 5 4 3
// 6 5 4
// 6 5
// 6

//Question : mirror right angle  triangle

// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     //Inverted
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write("  ");
//     }
//     //right
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//Question : make star triangle

// const prompt = require('prompt-sync')();
// let n = Number(prompt("Enter the number of rows: "));

// for (let i = 1; i <= n; i++) {
//     // Print spaces before stars to center the pyramid
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write("  ");
//     }
//     // Print stars for the current row
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write("* ");
//     }
//     // Move to the next line
//     console.log();
// }


//Question : X pattern

// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (i == j || i + j == n + 1) {
//             process.stdout.write("* ")
//         } else {
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

//Question : V pattern
// let prompt = require('prompt-sync')();
// // let n = Number(prompt("Enter a number"));
// // for (let i = 1; i <= n; i++) {
// //     for (let j = 1; j <= 2 * n; j++) {
// //         if (i == j || i + j == 2 * n) {
// //             process.stdout.write("* ")
// //         } else {
// //             process.stdout.write("  ")
// //         }
// //     }
// //     console.log();
// // }