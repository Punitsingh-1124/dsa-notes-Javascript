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
// /**
//  * Sorts the array so that 0s come first, then 1s, then 2s.
//  * This is done in-place using the Dutch National Flag algorithm.
//  * @param {number[]} nums
//  * @return {void}
//  */
// function sortColors(nums) {
//     let i = 0;             // Current index
//     let j = 0;             // Index to place the next 0
//     let k = nums.length - 1; // Index to place the next 2

//     while (i <= k) {
//         if (nums[i] === 0) {
//             // Swap with j (left side for 0)
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//             i++;
//             j++;
//         } else if (nums[i] === 2) {
//             // Swap with k (right side for 2)
//             [nums[i], nums[k]] = [nums[k], nums[i]];
//             k--;
//         } else {
//             // nums[i] === 1; leave it in the middle
//             i++;
//         }
//     }
// }

// // Test the function
// let nums = [2, 0, 2, 1, 1, 0];
// console.log("Before sorting:", nums);

// sortColors(nums);

// console.log("After sorting: ", nums);

//Question : Maximum subarry / kadane's algorithm
// // maxSubArray.js

// /**
//  * Finds the largest sum of a contiguous subarray
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxSubArray(nums) {
//     let max = -Infinity;
//     let sum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         max = Math.max(max, sum);
//         if (sum < 0) sum = 0;
//     }

//     return max;
// }

// // Test the function
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log("Input array:", nums);
// const result = maxSubArray(nums);
// console.log("Maximum subarray sum:", result);

//Question : Majority Element/Moore's voting algo
// // majorityElement.js

// /**
//  * Finds the majority element (appears more than n/2 times)
//  * @param {number[]} nums
//  * @return {number}
//  */
// function majorityElement(nums) {
//     let ans = nums[0];
//     let count = 1;

//     for (let i = 1; i < nums.length; i++) {
//         if (count === 0) {
//             ans = nums[i];
//             count = 1;
//         } else if (ans === nums[i]) {
//             count++;
//         } else {
//             count--;
//         }
//     }

//     return ans;
// }

// // Test the function
// const nums = [2, 2, 1, 1, 1, 2, 2];

// console.log("Input array:", nums);
// const result = majorityElement(nums);
// console.log("Majority element:", result);

//Question : Trapping rain water
// // trapRainWater.js

// /**
//  * Calculates how much rainwater can be trapped.
//  * @param {number[]} height
//  * @return {number}
//  */
// function trap(height) {
//     let left = new Array(height.length);
//     let right = new Array(height.length);
//     let maxLeft = height[0], maxRight = height[height.length - 1];

//     left[0] = maxLeft;
//     right[height.length - 1] = maxRight;

//     // Fill left array with max heights to the left
//     for (let i = 1; i < height.length; i++) {
//         maxLeft = Math.max(height[i], maxLeft);
//         left[i] = maxLeft;
//     }

//     // Fill right array with max heights to the right
//     for (let i = height.length - 2; i >= 0; i--) {
//         maxRight = Math.max(height[i], maxRight);
//         right[i] = maxRight;
//     }

//     // Calculate trapped water
//     let ans = 0;
//     for (let i = 0; i < height.length; i++) {
//         ans += Math.min(left[i], right[i]) - height[i];
//     }

//     return ans;
// }

// // Test the function
// const height = [0,1,0,2,1,0,1,3,2,1,2,1];

// console.log("Input elevation map:", height);
// const result = trap(height);
// console.log("Total trapped rainwater:", result);



