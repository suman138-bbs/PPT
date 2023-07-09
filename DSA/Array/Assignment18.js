
/**
 * 
💡 1. **Merge Intervals**

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.


 */


// function merge(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);
  
//     const merged = [];
//     let lastInterval = intervals[0];
  
//     for (let i = 1; i < intervals.length; i++) {
//       const currentInterval = intervals[i];
  
//       if (currentInterval[0] <= lastInterval[1]) {
//         lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
//       } else {
//         merged.push(lastInterval);
//         lastInterval = currentInterval;
//       }
//     }
  
//     merged.push(lastInterval);
  
//     return merged;
//   }

//   const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
// const result1 = merge(intervals1);
// console.log(result1);


// const intervals2 = [[1, 4], [4, 5]];
// const result2 = merge(intervals2);
// console.log(result2);



/**
 
💡 2. **Sort Colors**

Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.




 */

// function sortColors(nums) {
//   let low = 0;
//   let mid = 0;
//   let high = nums.length - 1;

//   while (mid <= high) {
//     if (nums[mid] === 0) {
//       swap(nums, low, mid);
//       low++;
//       mid++;
//     } else if (nums[mid] === 1) {
//       mid++;
//     } else {
//       swap(nums, mid, high);
//       high--;
//     }
//   }
// }

// function swap(nums, i, j) {
//   const temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }


// const nums1 = [2, 0, 2, 1, 1, 0];
// sortColors(nums1);
// console.log(nums1);


// const nums2 = [2, 0, 1];
// sortColors(nums2);
// console.log(nums2);





/**
 
💡 3. **First Bad Version Solution**

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 * 
 */
// function isBadVersion(version) {
//   return version >= 4; 
// }

// function firstBadVersion(n) {
//   let left = 1;
//   let right = n;

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     if (isBadVersion(mid)) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return left;
// }



// const n1 = 5;
// const bad1 = 4;
// const result1 = firstBadVersion(n1, bad1);
// console.log(result1);

// const n2 = 1;
// const bad2 = 1;
// const result2 = firstBadVersion(n2, bad2);
// console.log(result2);


/**
 
💡 4. **Maximum Gap**

Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

You must write an algorithm that runs in linear time and uses linear extra space.

 */


// function maximumGap(nums) {
//   if (nums.length < 2) {
//     return 0;
//   }

//   const max = Math.max(...nums);

//   let exp = 1;
//   const count = new Array(10).fill(0);
//   const output = new Array(nums.length).fill(0);

//   while (max / exp > 0) {
//     count.fill(0);

//     for (const num of nums) {
//       const digit = Math.floor((num / exp) % 10);
//       count[digit]++;
//     }

//     for (let i = 1; i < count.length; i++) {
//       count[i] += count[i - 1];
//     }

//     for (let i = nums.length - 1; i >= 0; i--) {
//       const digit = Math.floor((nums[i] / exp) % 10);
//       count[digit]--;
//       output[count[digit]] = nums[i];
//     }

//     nums = [...output];
//     exp *= 10;
//   }

//   let maxGap = 0;

//   for (let i = 1; i < nums.length; i++) {
//     maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
//   }

//   return maxGap;
// }

// const nums1 = [3, 6, 9, 1];
// const result1 = maximumGap(nums1);
// console.log(result1);


// const nums2 = [10];
// const result2 = maximumGap(nums2);
// console.log(result2);



/**
 
💡 5. **Contains Duplicate**

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

 */


// function containsDuplicate(nums) {
//   const set = new Set();

//   for (const num of nums) {
//     if (set.has(num)) {
//       return true;
//     }
//     set.add(num);
//   }

//   return false;
// }



// const nums1 = [1, 2, 3, 1];
// const result1 = containsDuplicate(nums1);
// console.log(result1);


// const nums2 = [1, 2, 3, 4];
// const result2 = containsDuplicate(nums2);
// console.log(result2);


// const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// const result3 = containsDuplicate(nums3);
// console.log(result3);


/**
 * <aside>
💡 6. **Minimum Number of Arrows to Burst Balloons**

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart <= x <= xend`. There is **no limit** to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return *the **minimum** number of arrows that must be shot to burst all balloons*.
*/


// function findMinArrowShots(points) {
//   if (points.length === 0) {
//     return 0;
//   }

//   points.sort((a, b) => a[1] - b[1]);

//   let end = points[0][1];
//   let arrows = 1;

//   for (let i = 1; i < points.length; i++) {
//     if (points[i][0] > end) {
//       end = points[i][1];
//       arrows++;
//     }
//   }

//   return arrows;
// }

// const points1 = [[10, 16], [2, 8], [1, 6], [7, 12]];
// const result1 = findMinArrowShots(points1);
// console.log(result1);




/**
💡 7. **Longest Increasing Subsequence**

Given an integer array `nums`, return *the length of the longest **strictly increasing***
.
*/


// function lengthOfLIS(nums) {
//   const n = nums.length;
//   const dp = new Array(n).fill(1);

//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
//         dp[i] = dp[j] + 1;
//       }
//     }
//   }

//   return Math.max(...dp);
// }


// const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
// const result1 = lengthOfLIS(nums1);
// console.log(result1);



/**
 * Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

Return `true` *if there is a **132 pattern** in* `nums`*, otherwise, return* `false`*.*
*/


// function find132pattern(nums) {
//   const n = nums.length;
//   const stack = [];
//   let third = Number.NEGATIVE_INFINITY;

//   for (let i = n - 1; i >= 0; i--) {
//     if (nums[i] < third) {
//       return true;
//     }

//     while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
//       third = stack.pop();
//     }

//     stack.push(nums[i]);
//   }

//   return false;
// }


// const nums1 = [1, 2, 3, 4];
// const result1 = find132pattern(nums1);
// console.log(result1);

