//Un-comment code tha run

//Example : Array 
// let arr = [];
// arr.push(100)
// arr.push(20)
// arr.push(10)
// arr.push(23)
// console.log(arr);

//Example : 
// let arr = [];
// arr.push(100)
// arr.push(20)
// arr.push(10)
// arr.push(23)
// console.log(arr[1]);
// console.log(arr);

//Example :
// let arr = [];
// arr.push(100)
// arr.push(20)
// arr.push(10)
// arr.push(23)
// console.log(arr);
// arr.pop();
// console.log(arr);

//Example :
// let arr = [];
// arr[0] = 100;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;
// // empty 4, 5,  6
// arr[7] =150

// console.log(arr);

//Example : 
// let arr = new Array(3);
// arr[0] = 100;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;

// arr[10] = 150
// console.log(arr);

//Example : 
// let arr = new Array(3)
// arr.push(10);
// console.log(arr);

//Example:
// let arr =[]
// arr[0] =Number(prompt("Enetr a value"));
// console.log(arr);

//2 : worng way
// let arr = new Array(5);
// arr[0] =Number(prompt("Enetr a value"));
// arr[1] =Number(prompt("Enetr a value"));
// arr[2] =Number(prompt("Enetr a value"));
// arr[3] =Number(prompt("Enetr a value"));
// arr[4] =Number(prompt("Enetr a value"));
// console.log(arr);

//3 : right way
// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] =Number(prompt("Enetr a value"));
// }
// console.log(arr);

//4 : total value of arr lenght 
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);

//5 :BIgger element in arr and smaller also
// let arr = [10, 2, 88, 100, 50];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//       if(max < arr[i]){
//         max = arr[i]
//       }
// }
// console.log(max);

// min 
// let arr = [10, 2, 88, 100, 50];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//       if(max > arr[i]){
//         max = arr[i]
//       }
// }
// console.log(max);

//6 : Two max no. in arr
// let arr = [10, 20, 45, 76, 87, 99, 54, 98];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         sMax = max;
//         max = arr[i];
//     } else if (arr[i] > sMax) {
//         sMax = arr[i]
//     }
// }
// console.log(sMax);

// let arr = [10, 20, 40, 40, 40, 40];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         sMax = max;
//         max = arr[i];
//     } else if (arr[i] > sMax && max !=arr[i]) {
//         sMax = arr[i]
//     }
// }
// console.log(sMax);

//7 : Reverace arr
//1
// let arr = [10, 20, 30, 40, 50]
// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//     temp[j] = arr[i];
//     j++;
// }
// console.log(temp);

// 2 - 
// let arr = [10, 20, 30, 40, 50]

// let i=0 , j= arr.length-1;
// while (i!=j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr);

//8 :move all 0 right side and left 1 side
// let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0]

// let i = 0, j = 0;
// while (i < arr.length) {
//     if (arr[i] == 0) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp;
//         j++
//     }
//     i++
// }
// console.log(arr);


