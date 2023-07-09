
/***
 * 
💡 **Question 1**
Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

 */
// function arraysIntersection(arr1, arr2, arr3) {
//     const result = [];
//     let p1 = 0;
//     let p2 = 0;
//     let p3 = 0;
  
//     while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
//       if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
//         result.push(arr1[p1]);
//         p1++;
//         p2++;
//         p3++;
//       } else if (arr1[p1] <= arr2[p2] && arr1[p1] <= arr3[p3]) {
//         p1++;
//       } else if (arr2[p2] <= arr1[p1] && arr2[p2] <= arr3[p3]) {
//         p2++;
//       } else if (arr3[p3] <= arr1[p1] && arr3[p3] <= arr2[p2]) {
//         p3++;
//       }
//     }
  
//     return result;
//   }

//  const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 5, 7, 9];
// const arr3 = [1, 3, 4, 5, 8];

// const result = arraysIntersection(arr1, arr2, arr3);
// console.log(result);





/**
💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

 */


// function findDisappearedNumbers(nums1, nums2) {
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
  
//     const result1 = [];
//     const result2 = [];
  
//     for (const num of nums1) {
//       if (!set2.has(num)) {
//         result1.push(num);
//       }
//     }
  
//     for (const num of nums2) {
//       if (!set1.has(num)) {
//         result2.push(num);
//       }
//     }
  
//     return [result1, result2];
//   }

//   const nums1 = [1, 2, 3];
// const nums2 = [2, 4, 6];

// const result = findDisappearedNumbers(nums1, nums2);
// console.log(result);


/**
 
💡 **Question 3**
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

 */

// function transpose(matrix) {
//     const rows = matrix.length;
//     const cols = matrix[0].length;
  
//     const result = new Array(cols).fill(null).map(() => new Array(rows));
  
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         result[j][i] = matrix[i][j];
//       }
//     }
  
//     return result;
//   }


//   const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   const result = transpose(matrix);
//   console.log(result);


/**
 * 
💡 **Question 4**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

 */


// function arrayPairSum(nums) {
//     nums.sort((a, b) => a - b);
  
//     let maxSum = 0;
//     for (let i = 0; i < nums.length; i += 2) {
//       maxSum += nums[i];
//     }
  
//     return maxSum;
//   }

//   const nums = [1, 4, 3, 2];
// const maxSum = arrayPairSum(nums);
// console.log(maxSum);


/**
 * 
💡 You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

 */


// function arrangeCoins(n) {
//     let start = 1;
//     let end = n;
  
//     while (start <= end) {
//       const mid = Math.floor((start + end) / 2);
//       const sum = (mid * (mid + 1)) / 2;
  
//       if (sum <= n) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     }
  
//     return end;
//   }

//   const n = 5;
// const completeRows = arrangeCoins(n);
// console.log(completeRows);

/**
 * 
💡 **Question 6**
Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.



 */


// function sortedSquares(nums) {
//     const result = new Array(nums.length);
//     let left = 0;
//     let right = nums.length - 1;
  
//     for (let i = nums.length - 1; i >= 0; i--) {
//       if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
//         result[i] = nums[left] * nums[left];
//         left++;
//       } else {
//         result[i] = nums[right] * nums[right];
//         right--;
//       }
//     }
  
//     return result;
//   }

  
//   const nums = [-4, -1, 0, 3, 10];
// const result = sortedSquares(nums);
// console.log(result);


/**
 
💡 **Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

 */


// function maxCount(m, n, ops) {
//     let minRows = m;
//     let minCols = n;
  
//     for (let i = 0; i < ops.length; i++) {
//       minRows = Math.min(minRows, ops[i][0]);
//       minCols = Math.min(minCols, ops[i][1]);
//     }
  
//     return minRows * minCols;
//   }

  
//   const m = 3;
// const n = 3;
// const ops = [[2, 2], [3, 3]];

// const result = maxCount(m, n, ops);
// console.log(result);


/**

💡 **Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

 */


// function shuffle(nums, n) {
//     const result = [];
  
//     for (let i = 0; i < n; i++) {
//       result.push(nums[i]);
//       result.push(nums[i + n]);
//     }
  
//     return result;
//   }

//   const nums = [2, 5, 1, 3, 4, 7];
// const n = 3;
// const result = shuffle(nums, n);
// console.log(result);

