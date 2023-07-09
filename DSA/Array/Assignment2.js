/**
 *Question 1
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
 */


// function arrayPairSum(nums) {
//     nums.sort((a, b) => a - b);
    
//     let sum = 0;
//     for (let i = 0; i < nums.length; i += 2) {
//       sum += nums[i];
//     }
    
//     return sum;
//   }


//   let nums = [1, 4, 3, 2];
// let result = arrayPairSum(nums);
// console.log(result);


/**
 * 
 * Question 2
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

 */

// function maxCandies(candyType) {
//     const uniqueCandies = new Set(candyType);
//     const maxAllowedCandies = candyType.length / 2;
    
//     return Math.min(uniqueCandies.size, maxAllowedCandies);
//   }

//   let candyType = [1, 1, 2, 2, 3, 3];
// let result = maxCandies(candyType);
// console.log(result);  


/**
 * 
 * Question 3
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.
 * 
 */

// function findLHS(nums) {
//     const frequencyMap = new Map();
    
//     for (let num of nums) {
//       if (frequencyMap.has(num)) {
//         frequencyMap.set(num, frequencyMap.get(num) + 1);
//       } else {
//         frequencyMap.set(num, 1);
//       }
//     }
    
//     let longestSubsequenceLength = 0;
    
//     for (let [num, frequency] of frequencyMap) {
//       if (frequencyMap.has(num + 1)) {
//         let currentSubsequenceLength = frequency + frequencyMap.get(num + 1);
//         longestSubsequenceLength = Math.max(longestSubsequenceLength, currentSubsequenceLength);
//       }
//     }
    
//     return longestSubsequenceLength;
//   }



//   let nums = [1, 3, 2, 2, 5, 2, 3, 7];
// let result = findLHS(nums);
// console.log(result);  


/**
 * 
 * Question 4
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 */



// function canPlaceFlowers(flowerbed, n) {
//     let count = 0;
//     let canPlant = 0;
    
//     for (let plot of flowerbed) {
//       if (plot === 0) {
//         count++;
//       } else {
//         if (count >= 2) {
//           canPlant += Math.floor((count - 1) / 2);
//         }
//         count = 0;
//       }
//     }
    
//     if (count >= 2) {
//       canPlant += Math.floor((count - 1) / 2);
//     }
    
//     return n <= canPlant;
//   }




//   let flowerbed = [1, 0, 0, 0, 1];
// let n = 1;
// let result = canPlaceFlowers(flowerbed, n);
// console.log(result); 


/**
 * Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 */



// function maximumProduct(nums) {
//     nums.sort((a, b) => a - b);
    
//     const n = nums.length;
    
//     // Compare the product of the last three numbers with the product of the first two numbers
//     // multiplied by the last number
//     return Math.max(
//       nums[n - 1] * nums[n - 2] * nums[n - 3],
//       nums[0] * nums[1] * nums[n - 1]
//     );
//   }


//   let nums = [1, 2, 3];
// let result = maximumProduct(nums);
// console.log(result);





/**
 * Question 6
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.


 */



// function search(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
    
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
      
//       if (nums[mid] === target) {
//         return mid;
//       } else if (nums[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
    
//     return -1;
//   }




//   let nums = [-1, 0, 3, 5, 9, 12];
// let target = 9;
// let result = search(nums, target);
// console.log(result); 


/***
 * Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 */



// function isMonotonic(nums) {
//     let isIncreasing = true;
//     let isDecreasing = true;
    
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] > nums[i - 1]) {
//         isIncreasing = false;
//       }
//       if (nums[i] < nums[i - 1]) {
//         isDecreasing = false;
//       }
//     }
    
//     return isIncreasing || isDecreasing;
//   }


//   let nums = [1, 2, 2, 3];
// let result = isMonotonic(nums);
// console.log(result); 



/**
 * 
 * Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

 * 
 * 
 */


// function minScore(nums, k) {
//     nums.sort((a, b) => a - b);
    
//     const n = nums.length;
    
//     const maxElement = nums[n - 1];
//     const minElement = nums[0];
    
//     const diff = maxElement - minElement;
    
//     if (diff > 2 * k) {
//       return diff - 2 * k;
//     } else {
//       return 0;
//     }
//   }

  
//   let nums = [1];
// let k = 0;
// let result = minScore(nums, k);
// console.log(result); 