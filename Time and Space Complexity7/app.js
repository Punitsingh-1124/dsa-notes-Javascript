// complexity

//time commplexity

//Handing for large input

//complexity representation
//C.R types
//- Big O -> upper bound / worst case
//- Thetha Θ -> Avarage case
//- Omega Ω -> lower bound / Best case

//type and Graph
//# constant time or o(1)
//# o(n) or liner time complexity
//# O(n²) or quadratic
//# O(logn) or
//# 2n ,3n, or exponentional
//# n! or fatorial T.C

//Generatinng complexity equation

//Space Compexity

//In detail Explainetion

// ## ✅ Complexity in Programming

// ### 🔸 **1. Time Complexity**

// It measures **how the time taken by an algorithm increases** with the **input size** (`n`).

// ---

// ### 🔹 **Complexity Representation (C.R) Types**

// | Notation    | Description                | Use Case            |
// | ----------- | -------------------------- | ------------------- |
// | `O` (Big-O) | Upper bound (Worst case)   | Max time it takes   |
// | `Θ` (Theta) | Tight bound (Average case) | Avg case (rare use) |
// | `Ω` (Omega) | Lower bound (Best case)    | Min time it takes   |

// ---

// ### 🔹 **Common Time Complexities with Graph Types**

// | Type         | Complexity   | Example                          | Description                |
// | ------------ | ------------ | -------------------------------- | -------------------------- |
// | Constant     | `O(1)`       | Accessing array index            | Time doesn't grow with `n` |
// | Linear       | `O(n)`       | Simple for-loop                  | Grows linearly             |
// | Logarithmic  | `O(log n)`   | Binary search                    | Grows slowly with `n`      |
// | Linearithmic | `O(n log n)` | Merge Sort                       | Sorting algorithms         |
// | Quadratic    | `O(n²)`      | Nested loops                     | Slower growth              |
// | Cubic        | `O(n³)`      | 3 nested loops                   | Even slower                |
// | Exponential  | `O(2ⁿ)`      | Recursive Fibonacci              | Extremely slow             |
// | Factorial    | `O(n!)`      | Traveling Salesman (Brute force) | Impractical                |

// ---

// ### 🔹 **Handling Large Input**

// For large input sizes:

// * Prefer **logarithmic (`O(log n)`)** or **linear (`O(n)`)** algorithms.
// * Avoid **exponential (`O(2ⁿ)`)** or **factorial (`O(n!)`)**.

// ✅ Use techniques like:

// * Greedy algorithms
// * Divide and conquer
// * Dynamic Programming
// * Efficient data structures (e.g., HashMaps, Heaps)

// ---

// ### 🔹 **Generating Time Complexity Equations**

// To estimate the time complexity:

// * Count the number of **basic operations** (assignments, comparisons, etc.)
// * Example:

// for (let i = 0; i < n; i++) {       // O(n)
//   for (let j = 0; j < n; j++) {     // O(n)
//     console.log(i, j);              // O(1)
//   }
// }
// // => Total Time Complexity = O(n²)

// ## ✅ Space Complexity

// ### 🔸 What is Space Complexity?

// It is the **total memory space** used by the algorithm, including:

// * Input size
// * Auxiliary (temporary) variables
// * Function call stack (in recursion)

// ### 🔹 Space Complexity Example:

// #### Example 1: O(1) Space (No extra space used)


// function sum(arr) {
//   let total = 0;        // O(1) space
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];    // No new data structures
//   }
//   return total;
// }


// #### Example 2: O(n) Space (Using extra array)

// function copyArray(arr) {
//   let newArr = [];             // O(n) space
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// ### 🔹 Space Complexity in Recursion

// Each recursive call uses space in the **call stack**.


// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1); // Stack frame increases
// }
// // Space complexity = O(n)

// ## 📌 Summary Table

// | Concept          | Notation/Type       | Best For                             |
// | ---------------- | ------------------- | ------------------------------------ |
// | Time Complexity  | O(n), O(log n), etc | Measure speed                        |
// | Space Complexity | O(1), O(n), etc     | Measure memory usage                 |
// | Best Case        | `Ω`                 | Min time needed                      |
// | Worst Case       | `O`                 | Max time needed                      |
// | Average Case     | `Θ`                 | Typical case (less used in practice) |




