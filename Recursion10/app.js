//Recursion

//Stack memory
//Push and Pop
//return keyword
//Introduction on Recursion

// exp: 1
// greet()
// function greet() {
//     console.log("First");
//     enjoy()
// }
// function enjoy() {
//     console.log("second");
//     temp()
// }
// function temp() {
//     console.log("third");
// }
// First
// second
// third

//exp:2
// greet()
// function greet() {
//     let a = 10;
//     console.log("First");
//     enjoy()
// }
// function enjoy() {
//     console.log("second");
//     temp()
// }
// function temp() {
//     console.log("third");
// }

//exp:3
// function temp(val) {
//     if (val === 0) return
//     console.log("hello world");
// }
// temp(10); //if value is 0 that time // nothing excicuted
// //hello world

//Question : print hello  world n time
// function temp(n) {
//     if (n == 0) return
//     console.log("hello world");
//     temp(n - 1);
// }
// temp(5);
// hello world
// hello world
// hello world
// hello world
// hello world

//exp:2  reverse way
// function temp(n) {
//     if (n == 0) return
//     console.log("hello world");
//     temp(--n);
// }
// temp(5);
// hello world
// hello world
// hello world
// hello world
// hello world

//Question : print natural no. 1-n/n-1
//exp:1
// function temp(n) {
//     if(n == 0) return
//     console.log(n);
//     temp(n - 1);
// }
// temp(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

//Exp:2
// function temp(n) {
//     if(n == 0) return
//     temp(n - 1);
//     console.log(n);
// }
// temp(10);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//Question : Factorial / Sum

//Sum
//f(5) => 5 + f(4) => 4 + f(3) = ans

// function sum(n) {
//     if (n == 1) return 1;
//     return n + sum(n - 1);
// }
// console.log(sum(10));
// 55

//Factorial
// function fact(n) {
//     if (n == 1) return n;
//     return n * fact(n - 1);
// }
// console.log(fact(5));
//120

//When should be use retun keyword while recursive call


//Quetion : Fibonacci series
//adding priviess sum of torm
//0,1,1,2,3,5,8,13,21,34......n

//exp: 1
// let n = 10;
// let first = 0, second = 1;

// process.stdout.write(first + " " + second + " ");
// for (let i = 1; i <= n - 2; i++) {
//     let third = first + second;
//     first = second;
//     second = third;
//     process.stdout.write(third + " ");
// }

//exp:2
// function fiboNTerms(n, first, second) {
//     if (n == 0) return
//     let third = first + second;
//     process.stdout.write(" " + third);
//     fiboNTerms(n - 1, second, third);
// }

// let n = 10;
// process.stdout.write(0 + " " + 1 + " ");
// fiboNTerms(n - 2, 0, 1);
//0 1  1 2 3 5 8 13 21 34