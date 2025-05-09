//QUestion : left and right rotation by 1

// let arr = [1, 2, 3, 4, 5]

// let copy = arr[0];
// for (let i = 0; i < arr.length - 1; i++){
//     arr[i] =arr[i +1 ];
// }
// arr[arr.length-1] = copy;
// console.log(arr);
//[ 2, 3, 4, 5, 1 ]

//Question :lmove left element right by 1
// let arr = [1, 2, 3, 4, 5]
// let copy = arr[arr.length-1]
// for (let i = arr.length-1; i>0; i--) {
//     arr[i] = arr[i - 1];

// }
// arr[0] = copy;
// console.log(arr);
//[ 5, 1, 2, 3, 4 ]

// examples : nasted looping
// for (let j = 1; j <= 4; j++) {
//     console.log(j + "Execution");
//     for (let i = 1; i <= 3; i++) {
//         console.log("hello");
//     }
// }
//1Execution
// hello
// hello
// hello
// 2Execution
// hello
// hello
// hello
// 3Execution
// hello
// hello
// hello
// 4Execution
// hello
// hello
// hello

//Question :left and right rotation by k element
// let arr = [1, 2, 3, 4, 5]
// let k = Number(prompt("Enter k value"))
// for (let j = 0; j < k; j++) {
//     let copy = arr[0]
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy
// }
// console.log(arr);
//(5) [3, 4, 5, 1, 2]

//2
// let arr = [1, 2, 3, 4, 5]
// let k = Number(prompt("Enter k value"))
// k = k % arr.length
// let count = 0;
// for (let j = 0; j < k; j++) {
//     count++;
//     let copy = arr[0]
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy
// }
// console.log(arr);
// console.log(count);
//(5) [3, 4, 5, 1, 2]
// 2

//3 : left rotation by k steps 
// let arr =[1,2,3,4,5]
// let temp = new Array(arr.length)
// let k = Number(prompt("Enter k Value"))
// k = k % arr.length

// for (let i = 0; i < arr.length; i++) {
//    temp[i] =arr[(i+k)%arr.length] 
// }
// console.log(temp);
// (5) [4, 5, 1, 2, 3]

//4 :right rotation
// let arr =[1,2,3,4,5]
// let temp = new Array(arr.length)
// let k = Number(prompt("Enter k Value"))
// k = k % arr.length

// for (let i = 0; i < arr.length; i++) {
//    temp[(i+k)%arr.length] = arr[i]
// }
// console.log(temp);
// (5) [3, 4, 5, 1, 2]

//5 : block swap reverce algo (left rotation)
// let arr = [1, 2, 3, 4, 5]
// let k = Number(prompt("Enter a value "))
// k = k % arr.length
// reverse(0, k - 1)
// reverse(k, arr.length - 1)
// reverse(0, arr.length - 1)
// function reverse(i, j) {
//     while (i < j) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
// }
// console.log(arr);
// (5) [3, 4, 5, 1, 2]

//6 : (right rotation)



//Question : Remove duplicates from the sorted array (leetcode)
//two pointer algo

// var removeDuplicates = function(nums) {
//     let j = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i] !== nums[i + 1]) {
//         nums[j] = nums[i + 1];
//         j++;
//       }
//     }
//     return j;
//   };
//   // Example usage:
//   const nums = [1, 1, 2, 2, 3, 4, 4, 5];
//   const length = removeDuplicates(nums);
//   console.log("Length of array after removing duplicates:", length);
//   console.log("Array after removing duplicates:", nums.slice(0, length));

//2:more easy for length only
// var removeDuplicates = function(nums) {
//     let j = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i] !== nums[i + 1]) {
//         nums[j] = nums[i + 1];
//         j++;
//       }
//     }
//     return j;
//   };

//   // Example usage: output only the length after removing duplicates
//   const nums = [1, 1, 2, 2, 3, 4, 4, 5];
//   console.log(removeDuplicates(nums));


//Question: merge sorted arry
// let arr1 = [2, 5, 6]
// let arr2 = [1, 3, 4, 8]
// let merge = new Array(arr1.length + arr2.length)
// let i = j = k = 0;
// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         merge[k++] = arr1[i++]
//     } else {
//         merge[k++] = arr2[j++]
//     }
// }
// while (j < arr2.length) {
//     merge[k++] = arr2[j++]
// }
// while (i < arr1.length) {
//     merge[k++] = arr1[i++]
// }
// console.log(merge);
//output
// [1, 2, 3, 4, 5, 6, 8]

//Question for leetcode (merge sorted array : easy)
// Merge function
// var merge = function(nums1, m, nums2, n) {
//     let i = m - 1;        // pointer for last valid element in nums1
//     let j = n - 1;        // pointer for last element in nums2
//     let k = m + n - 1;    // pointer for the end of nums1

//     while (j >= 0) {
//         if (i >= 0 && nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }
// };

// // Test example
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// merge(nums1, m, nums2, n);

// // Print result
// console.log("Merged nums1:", nums1);


//Question : Best time to buy and sell stocks
/**
 * Function to calculate the maximum profit from stock prices
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     let min = prices[0];
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < min) min = prices[i];
//         let profit = prices[i] - min;
//         maxProfit = Math.max(maxProfit, profit);
//     }
//     return maxProfit;
// };

// // Example usage
// let prices = [7, 1, 5, 3, 6, 4];
// let result = maxProfit(prices);
// console.log("Max Profit:", result);  // Output should be 5


//Question : sort the color

//Question : Maximum subarry / kadane's algorithm
//Question : Majority Element/Moore's voting algo
//Question : Trapping rain water


