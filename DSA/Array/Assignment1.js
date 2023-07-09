/*Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.*/

// function twoSum(nums, target) {
//     const numMap = new Map(); 
  
//     for (let i = 0; i < nums.length; i++) {
//       const diff = target - nums[i];
      
//       if (numMap.has(diff)) {
//         return [i, numMap.get(diff)];
//       }
      
//       numMap.set(nums[i], i);
//     }
  
//     return []; 
//   }


//   const nums = [2, 7, 11, 15];
// const target = 17;

// const result = twoSum(nums, target);
// console.log(result); 


/** 
 
💡 **Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

 */
// function removeElement(nums, val) {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== val) {
//         nums[k] = nums[i];
//         k++;
//       }
//     }
//     return k;
//   }
  
//   let nums = [3, 2, 2, 3];
//   let val = 3;
//   let result = removeElement(nums, val);
//   console.log("Output:", result);
//   console.log("nums =", nums);  


/**

💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 */



// function searchInsert(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
    
//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
      
//       if (nums[mid] === target) {
//         return mid;
//       } else if (nums[mid] < target) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     }
    
//     return start;
//   }



//   let nums = [1, 3, 5, 6];
// let target = 2;
// let result = searchInsert(nums, target);
// console.log(result);


/**
 * 
💡 **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

*
 */

function plusOne(digits) {
    let carry = 1;
    
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] += carry;
      
      if (digits[i] < 10) {
        return digits;
      } else {
        digits[i] = 0;
      }
    }
    
    digits.unshift(carry);
    return digits;
  }

  
  let digits = [1, 2, 3];
let result = plusOne(digits);
console.log(result);  




/**
 *
💡 **Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



 */

function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    
    while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1];
        p1--;
      } else {
        nums1[p] = nums2[p2];
        p2--;
      }
      p--;
    }
    
    // Copy remaining elements from nums2 if any
    while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
      p--;
    }
  }



  let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);  


/**
💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 */


function containsDuplicate(nums) {
    const seen = new Set();
    
    for (let num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    
    return false;
  }


  let nums = [1, 2, 3, 1];
let result = containsDuplicate(nums);
console.log(result);


/**
 * 
💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

*/


function moveZeroes(nums) {
    let left = 0;
    let right = 0;
    
    while (right < nums.length) {
      if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]]; // Swap elements at left and right pointers
        left++;
      }
      right++;
    }
  }


  let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); 



/**
 * 

💡 **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 */


function findErrorNums(nums) {
    let xor = 0;
    let n = nums.length;
    
    for (let i = 1; i <= n; i++) {
      xor ^= i;
      xor ^= nums[i - 1];
    }
    
    
    let rightmostSetBit = xor & -xor;
    
    let missing = 0;
    let duplicate = 0;
    
    
    for (let num of nums) {
      if ((num & rightmostSetBit) !== 0) {
        missing ^= num;
      } else {
        duplicate ^= num;
      }
    }
    
  
    for (let i = 1; i <= n; i++) {
      if ((i & rightmostSetBit) !== 0) {
        missing ^= i;
      } else {
        duplicate ^= i;
      }
    }
    
    return [duplicate, missing];
  }


  let nums = [1, 2, 2, 4];
let result = findErrorNums(nums);
console.log(result);  