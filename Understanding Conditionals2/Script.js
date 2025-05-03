//Question: Valid Voter
// var ans = Number(prompt("what is your age ?"));
// // console.log(ans);
// if (isNaN(ans)) {
//     console.log("Worng Input");
// }
// else if (ans >= 18) {
//     console.log("You can vote");
// }
// else {
//     console.log("You cant vote");
// }

//Question: Shop Discount

// exp: 1
// let amount = Number(prompt("What is the final Amount ?"));
// // console.log(amount);
// if (amount > 0 && amount <= 5000) {
//     console.log(amount);
// }
// else if (amount > 5001 && amount <= 7000) {
//     console.log(amount - Math.floor((5 * amount) / 100));
// }
// else if (amount > 7001 && amount <= 9000) {
//     console.log(amount - Math.floor((10 * amount) / 100));
// }
// else if (amount > 9000) {
//     console.log(amount - Math.floor((20 * amount) / 100));
// }
// else if (isNaN(amount)) {
//     console.log("Worng Input");
// }

// exp:2
// let amount = Number(prompt("What is the final Amount ?"));
// // console.log(amount);
// let dis = 0;
// if (amount > 0 && amount <= 5000) {
//     dis = 0;
// }
// else if (amount > 5001 && amount <= 7000) {
//     dis = 5;
// }
// else if (amount > 7001 && amount <= 9000) {
//     dis = 10;
// }
// else if (amount > 9000) {
//     dis = 20;
// }

// console.log(amount - Math.floor((dis * amount) / 100));

//Question: Bijili Bill

//up to 100unit = Rs.4.2
//101 to 200unit = Rs.
//201 to 400unit = Rs.8
//more than 400 = Rs.13
//If i have 700 unit than method to solve = 700-400 than 400-200 than 200-100 than only 100
//(300*13)+(200*8)+(100*6)+100*4=6500
// let unit = prompt("Enter Electricity unit");//I have 700
// amount = 0
// if (unit > 400) {
//     amount = (unit - 400) * 13;//3900
//     unit = 400;
// }//400
// if (unit > 200 && unit <= 400) {
//     amount += (unit - 200) * 8;//1600
//     unit = 200;
// }//200
// if (unit > 100 && unit <= 200) {
//     amount += (unit - 100) * 6;//600
//     unit = 100;
// }
// amount += unit *4;
// console.log(amount);//6500 units

//Question: INR Denomination

// let amount = 5001;
// if (amount >= 500) {
//     console.log("500 notes :" + Math.floor(amount / 500));
//     amount = amount % 500;
// }
// if (amount >= 200) {
//     console.log("200 notes :" + Math.floor(amount / 200));
//     amount = amount % 200;
// }
// if (amount >= 100) {
//     console.log("100 notes :" + Math.floor(amount / 100));
//     amount = amount % 100;
// }
// if (amount >= 50) {
//     console.log("50 notes :" + Math.floor(amount / 50));
//     amount = amount % 50;
// }
// if (amount >= 20) {
//     console.log("20 notes :" + Math.floor(amount / 20));
//     amount = amount % 20;
// }
// if (amount >= 10) {
//     console.log("10 notes :" + Math.floor(amount / 10));
//     amount = amount % 10;
// }
// if (amount >= 5) {
//     console.log("5 notes :" + Math.floor(amount / 5));
//     amount = amount % 5;
// }
// if (amount >= 2) {
//     console.log("2 notes :" + Math.floor(amount / 2));
//     amount = amount % 2;
// }
// if (amount === 1) {
//     console.log("1 notes :" + amount);
//     amount = amount % 1;
// }

//Ternary operator ? :

// c ? true ka code : false ka code
//exp:1
// 112>13 ? console.log("hiiii") : console.log("okayyyy");
//exp:2
// console.log(122>13?"okay":"Not okay");


//Nested ternary operator :
// let num = 0;
// console.log(num>0?"positive":num<0?"negative":"zero");

//Switch and Once case handling multiplke values
//--- Switch case cant handle float value its precision issues

// exp : 1

// let day = 2
// switch (day) {
//     case 1: console.log("monday");
//         break;
//     case 2: console.log("Tuesday");
//         break;
//     case 3: console.log("wednesday");
//         break;
//     case 4: console.log("Thrusday");
//         break;
//     case 5: console.log("Friday");
//         break;
//     case 6: console.log("saterday");
//         break;
//     case 7: console.log("sunday");
//         break;
//     default: console.log("invalid");
//         break;
// }

// exp : 2

// let day = 2;
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7: console.log("sunday");
//         break;
//     default: console.log("invalid");
//         break;
// }

// exp : 3

// switch (true) {
//     case 19 > 6:
//         console.log("hello");
//         break;

//     case 10 < 9:
//         console.log("Not Hello");
//         break;

//     default: console.log("invalid");
//         break;
// }

//exp :4 
//case:1
// let num = 0.2 + 0.3
// switch (num) {
//     case 0.4:
//         console.log("hello");
//         break;
//     case 0.5:
//         console.log("hii");
//         break;

//     default: console.log("invalid");

//         break;
// }//hii
//case:2
// let num = 0.1 + 0.3
// switch (num) {
//     case 0.3:
//         console.log("hello");
//         break;
//     case 0.5:
//         console.log("hii");
//         break;

//     default: console.log("invalid");

//         break;
// }//hii



