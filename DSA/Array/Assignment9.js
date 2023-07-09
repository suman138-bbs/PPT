/**

💡 **Question 1**

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

 */


// function isPowerOfTwo(n) {
//     return n > 0 && (n & (n - 1)) === 0;
//   }
  
//   console.log(isPowerOfTwo(1)); 
//   console.log(isPowerOfTwo(16)); 
//     console.log(isPowerOfTwo(3)); 



/**
 * 
💡 **Question 2**

Given a number n, find the sum of the first natural numbers.

 */


// function sumOfNaturalNumbers(n) {
//     return (n * (n + 1)) / 2;
//   }
  
//   // Test examples
//   console.log(sumOfNaturalNumbers(3)); 
//   console.log(sumOfNaturalNumbers(5)); 
  


  /**
 
💡 **Question 3**

****Given a positive integer, N. Find the factorial of N. 


   */

// function factorial(N) {
//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//       result *= i;
//     }
//     return result;
//   }

//   console.log(factorial(5)); 
//   console.log(factorial(4)); 
  


/**
💡 **Question 4**

Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.


 */

// function findExponent(N, P) {
//     return Math.pow(N, P);
//   }
  
 
//   console.log(findExponent(5, 2)); 
//   console.log(findExponent(2, 5)); 


/**
💡 **Question 5**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.


 */


// function findMax(arr, start) {
//     if (start === arr.length - 1) {
//       return arr[start];
//     }
//     const maxRest = findMax(arr, start + 1);
//     return Math.max(arr[start], maxRest);
//   }
  
//   function getMaxElement(arr) {
//     return findMax(arr, 0);
//   }
  

//   const arr1 = [1, 4, 3, -5, -4, 8, 6];
//   console.log(getMaxElement(arr1)); 
  
//   const arr2 = [1, 4, 45, 6, 10, -8];
//   console.log(getMaxElement(arr2)); 
  


/**
 * <aside>
💡 **Question 7**

Given a string S, the task is to write a program to print all permutations of a given string.


 */

// function swap(s, i, j) {
//     const charArray = s.split('');
//     const temp = charArray[i];
//     charArray[i] = charArray[j];
//     charArray[j] = temp;
//     return charArray.join('');
//   }
  
//   function generatePermutations(s, left, right, result) {
//     if (left === right) {
//       result.push(s);
//       return;
//     }
  
//     for (let i = left; i <= right; i++) {
//       s = swap(s, left, i);
//       generatePermutations(s, left + 1, right, result);
//       s = swap(s, left, i); 
//   }
  
//   function printPermutations(S) {
//     const result = [];
//     const left = 0;
//     const right = S.length - 1;
//     generatePermutations(S, left, right, result);
//     return result;
//   }
  
 
//   const S1 = 'ABC';
//   console.log(printPermutations(S1)); 
  
//   const S2 = 'XY';
//   console.log(printPermutations(S2)); 


/**

💡 **Question 8**

Given an array, find a product of all array elements.


 */


// function productOfArray(arr) {
//     let product = 1;
//     for (let num of arr) {
//       product *= num;
//     }
//     return product;
//   }
  
  
//   const arr1 = [1, 2, 3, 4, 5];
//   console.log(productOfArray(arr1)); 
  
//   const arr2 = [1, 6, 3];
//   console.log(productOfArray(arr2));
  