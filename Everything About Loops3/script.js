//jitni jaada lines utna bada size file ka
//1mb vs 100mb
//6000 line ka code -> file size jaada -> user ko time lagega load krne main website -> user expereince kharab ho jaye gan -> brand ka overall performance bad -> busib=ness band bad ho jaye ga bhai
//loop -> whatsapp, instagram , facebook, ecommerce , yt use by loops is very imp

//loop 
//types -> for, while , do-while

// for 
// for(start; end ; change){
//console.log();
// }

// exp1
//1-22
// for (let i = 1; i < 23; i++) {
//     console.log(i);
// }

// exp2
//200 - 100
// for (let i = 200; i >99; i--) {
//    console.log(i);
// }

// exp3
// let a = "hello";
// for (let i = 0; i < 100; i++) {
//     console.log(a);
// }

// exp4
//1-10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//exp5
//1-11 fail
// var i=1 ;
// for (; i <= 10; i++) {
//     console.log(i);
// }
// console.log(i+" fail");

// exp6 -> imp in this  if there is (;;) two semicolen is valid and infinite code but there is even one ; is missing than its not valid 
//for(;;){
// witre any thing
// }

//Question : Sum of n natural number and factional of number

// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancelled");

// }
// else {
//     var n = Number(pr);
//     if (isNaN(n)) {
//         console.log("invalid input");
//     }
//     else {
//         if (n > 0) {
//             var sum = 0;
//             for (var i = 1; i <= n; i++) {
//                 sum = sum + i;
//             }
//             console.log(sum);
//         }
//         else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// };

//Question : factorial of number

// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancelled");

// }
// else {
//     var n = Number(pr);
//     if (isNaN(n)) {
//         console.log("invalid input");
//     }
//     else {
//         if (n > 0) {
//             var fact = 1;
//             for (var i = 1; i <= n; i++) {
//                 fact = fact * i;
//             }
//             console.log(fact);
//         }
//         else {
//             console.log("should be we and more than 0");
//         }
//     }
// };

//Question : factors of number


// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancelled");

// }
// else {
//     var n = Number(pr);
//     if (isNaN(n)) {
//         console.log("invalid input");
//     }
//     else {
//         if (n > 0) {
//             for (let i = 1; i <= Math.floor(n / 2); i++) {
//                 if (n % i === 0) {
//                     console.log(i);
//                 }
//             }
//             console.log(n);
//         }
//         else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// };

//Question : Prime number

// exp 1:
// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancelled");

// }
// else {
//     var n = Number(pr);
//     if (isNaN(n)) {
//         console.log("invalid input");
//     }
//     else {
//         if (n > 0) {
//             var primeHai = true;
//             for (let i = 2; i <= Math.floor(n / 2); i++) {
//                 if (n % i === 0) {
//                     primeHai = false;
//                     break;
//                 }
//             }
//             console.log(primeHai);

//         }
//         else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// };

//exp 2:
// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancelled");

// }
// else {
//     var n = Number(pr);
//     if (isNaN(n)) {
//         console.log("invalid input");
//     }
//     else {
//         if (n > 0) {
//           console.log(isPrime(n));
//         }
//         else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// };

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n == 2) return true;
//     if (n % 2 == 0) return false;
//     for (let i = 3; i <= (Math.sqrt(n)); i += 2) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

//37 = 6 = 2-> 6


//Break and Continue
//break loop ko roakta hai 
//continue loop ko skip krte hai agle value par

// exp 1:
// for (let i = 1; i < 23; i++) {
//    if(i === 11) break;
//    else console.log(i);
// }
// // exp 2:
// for (let i = 1; i < 23; i++) {
//    if(i === 11) break;
//    else console.log(i);
// }


//While loop 

// example;
// start;
// while(end){
//     //code 
//     change;
// }

// exp 1:
//  var i = 1;
//  while(i < 23){
//     console.log(i);
//     i++;
//  }

//exp 2:

// var ans = prompt('Kuchh bhi dedo(exit for close)');

// while(ans !== 'exit'){
//     ans = prompt('Kuchh bhi dedo(exit for close)');
// }


//Question : Sum of digit
//Explaining
//1234%10 -> 4
//1234/10 -> 123%10 -> 3
//123/10 -> 12%10 -> 2
//12/10 -> 1%10 -> 1
//1/10 -> 0

// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancelled");

// }
// else {
//     var n = Number(pr);
//     if (isNaN(n)) {
//         console.log("invalid input");
//     }
//     else {
//         if (n > 0) {
//             var sum = 0;
//             while (n > 0) {
//                 var rem = n % 10;
//                 sum = sum + rem;
//                 n = Math.floor(n / 10);
//             }
//             console.log((sum));
//         }
//         else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// };



//Question : reverse the number
// 1234%10 -> 4*10 => 40
// 1234/10 -> 123%10 => 3 + 40 =>43

//123
//3*10 = 32*10 => 320 + 1 = 321

//this method reverse the no. 

// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancelled");

// }
// else {
//     var n = Number(pr);
//     if (isNaN(n)) {
//         console.log("invalid input");
//     }
//     else {
//         if (n > 0) {
//             var sum = 0;
//             while (n > 0) {
//                 var rev = 0
//                 while (n > 0) {
//                     var rem = n % 10;
//                     rev = rev * 10 + rem;
//                     n = Math.floor(n / 10)
//                 }
//             }
//             console.log((rev));
//         }
//         else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// };


//Question : Strong number

//145 = 1! + 4! + 5! 

// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancelled");

// }
// else {
//     var n = Number(pr);
//     if (isNaN(n)) {
//         console.log("invalid input");
//     }
//     else {
//         if (n > 0) {
//             var sum = 0;
//             var copy = n;
//             while (n > 0) {
//                 var rem = n % 10;
//                 var fact = 1;
//                 for (let i = 1; i <= rem; i++) {
//                     fact = fact * i
//                 }
//                 sum = sum + fact;
//                 n = Math.floor(n / 10);
//             }
//             if (copy === sum) {
//                 console.log("Strong No.");

//             }
//             else {
//                 console.log("NOT Strong");

//             }

//         }
//         else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// };

//solution in detaul
// For the input 145:

// First iteration:
// rem = 145 % 10 = 5
// Factorial of 5 is 120 (1 * 2 * 3 * 4 * 5).
// sum = 0 + 120 = 120.
// n = Math.floor(145 / 10) = 14.

// Second iteration:
// rem = 14 % 10 = 4
// Factorial of 4 is 24 (1 * 2 * 3 * 4).
// sum = 120 + 24 = 144.
// n = Math.floor(14 / 10) = 1.

// Third iteration:
// rem = 1 % 10 = 1
// Factorial of 1 is 1.
// sum = 144 + 1 = 145.
// n = Math.floor(1 / 10) = 0.

// After the loop, it checks if the original number (copy, which is 145) is equal to the calculated sum (145).

// Since 145 === 145, it logs "Strong No.".


//Question : Do-while

// example:
// var i=1;
// do{
//     console.log("hey");
//     i++;
// }
// while(i<=10);


//Question : repeat hello

//Question : Guess the number
// let random = Math.floor(Math.random() * 100) + 1;
// let guess = 0;
// while (guess !== random) {
//     guess = Number(prompt("Guess the Number"))
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         console.log("try again b/w 1 to 100");
//         continue
//     };
//     if (guess > random) {
//         console.log("too high, try again");

//     } else if (guess < random) {
//         console.log("too low , try again");

//     } else {
//         console.log("congrats and number ", guess);
//     }
// };









//Question : sassta calculator
