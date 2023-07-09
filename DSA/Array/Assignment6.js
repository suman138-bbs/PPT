/**
 
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

 */


// function findPermutation(s) {
//     const n = s.length;
//     const perm = new Array(n + 1);
//     let smallest = 0;
//     let largest = n;
  
//     for (let i = 0; i < n; i++) {
//       if (s[i] === 'I') {
//         perm[i] = smallest;
//         smallest++;
//       } else {
//         perm[i] = largest;
//         largest--;
//       }
//     }
  
//     perm[n] = smallest;  
//     return perm;
//   }
  
  
//   const s = 'IDID';
//   console.log(findPermutation(s));  
  


/**
 💡 **Question 2**

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

 */

// function searchMatrix(matrix, target) {
//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     let left = 0;
//     let right = rows * cols - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       const row = Math.floor(mid / cols);
//       const col = mid % cols;
//       const value = matrix[row][col];
  
//       if (value === target) {
//         return true;
//       } else if (value < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return false;
//   }
  
//  const matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60]
//   ];
//   const target = 3;
//   console.log(searchMatrix(matrix, target)); 



/**
 * 
💡 **Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 */



// function validMountainArray(arr) {
//     const n = arr.length;
//     let i = 0;
  
//     while (i < n - 1 && arr[i] < arr[i + 1]) {
//       i++;
//     }
  
// if (i === 0 || i === n - 1) {
//       return false;
//     }
  
//     while (i < n - 1 && arr[i] > arr[i + 1]) {
//       i++;
//     }
  
//       return i === n - 1;
//   }
  
//   const arr = [2, 1];
//   console.log(validMountainArray(arr));
  


/**
 
💡 **Question 4**

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.


 */


// function findMaxLength(nums) {
//     const map = new Map();
//     let count = 0;
//     let maxLength = 0;
  
    
//     map.set(0, -1);
  
//     for (let i = 0; i < nums.length; i++) {
      
//       count += nums[i] === 1 ? 1 : -1;
  
      
//       if (map.has(count)) {
//         maxLength = Math.max(maxLength, i - map.get(count));
//       } else {
       
//         map.set(count, i);
//       }
//     }
  
//     return maxLength;
//   }
  

//   const nums = [0, 1];
//   console.log(findMaxLength(nums)); 
  


/**
💡 **Question 5**

The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

 */

// function minProductSum(nums1, nums2) {
//     nums1.sort((a, b) => a - b);
//     nums2.sort((a, b) => b - a);
  
//     let minProductSum = 0;
  
//     for (let i = 0; i < nums1.length; i++) {
//       minProductSum += nums1[i] * nums2[i];
//     }
  
//     return minProductSum;
//   }
  
//  const nums1 = [5, 3, 4, 2];
//   const nums2 = [4, 2, 2, 5];
//   console.log(minProductSum(nums1, nums2));
  


/**
 * 
💡 **Question 6**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.


 */


// function findOriginalArray(changed) {
//     const n = changed.length;
//     if (n % 2 !== 0) {
//       return []; // If the length is odd, it can't be a doubled array
//     }
  
//     const countMap = new Map();
//     for (let num of changed) {
//       countMap.set(num, (countMap.get(num) || 0) + 1);
//     }
  
//     changed.sort((a, b) => a - b);
  
//     const original = [];
//     for (let num of changed) {
//       if (countMap.has(num) && countMap.get(num) > 0) {
//         const doubleNum = num * 2;
//         if (countMap.has(doubleNum) && countMap.get(doubleNum) > 0) {
//           original.push(num);
//           countMap.set(num, countMap.get(num) - 1);
//           countMap.set(doubleNum, countMap.get(doubleNum) - 1);
//         } else {
//           return [];
//         }
//       }
//     }
  
//     return original;
//   }
  
  
//   const changed = [1, 3, 4, 2, 6, 8];
//   console.log(findOriginalArray(changed)); 
  

/**
 
💡 **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 */


// function generateMatrix(n) {
//     const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
//     let num = 1; 
//     let top = 0; 
//     let bottom = n - 1; 
//     let left = 0; 
//     let right = n - 1; 
  
//     while (top <= bottom && left <= right) {
      
//       for (let i = left; i <= right; i++) {
//         matrix[top][i] = num++;
//       }
//       top++;
  
      
//       for (let i = top; i <= bottom; i++) {
//         matrix[i][right] = num++;
//       }
//       right--;
  
      
//       if (top <= bottom) {
//         for (let i = right; i >= left; i--) {
//           matrix[bottom][i] = num++;
//         }
//         bottom--;
//       }
  
     
//       if (left <= right) {
//         for (let i = bottom; i >= top; i--) {
//           matrix[i][left] = num++;
//         }
//         left++;
//       }
//     }
  
//     return matrix;
//   }
  

//   const n = 3;
//   console.log(generateMatrix(n));
 
  




/**
 
💡 **Question 8**

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

 */

function multiply(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let x = 0; x < k; x++) {
          result[i][j] += mat1[i][x] * mat2[x][j];
        }
      }
    }
  
    return result;
  }
  

  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  console.log(multiply(mat1, mat2));

  

