/**
 
💡 **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 */



// function isIsomorphic(s, t) {
//     if (s.length !== t.length) {
//       return false; 
//     }
  
//     const sMap = new Map(); 
//     const tMap = new Map(); 
  
//     for (let i = 0; i < s.length; i++) {
//       const sChar = s[i];
//       const tChar = t[i];
  
      
//       if (sMap.has(sChar)) {
//         if (sMap.get(sChar) !== tChar) {
//           return false; 
//         }
//       } else {
//         sMap.set(sChar, tChar);
//       }
  
      
//       if (tMap.has(tChar)) {
//         if (tMap.get(tChar) !== sChar) {
//           return false; 
//         }
//       } else {
//         tMap.set(tChar, sChar);
//       }
//     }
  
//     return true; 
//   }
  
//   // Test example
//   const s = "egg";
//   const t = "add";
//   console.log(isIsomorphic(s, t)); 
  

/**

💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).
*/


// function isStrobogrammatic(num) {
//     const strobogrammaticPairs = {
//       "0": "0",
//       "1": "1",
//       "6": "9",
//       "8": "8",
//       "9": "6",
//     };
  
//     let left = 0;
//     let right = num.length - 1;
  
//     while (left <= right) {
//       const leftDigit = num[left];
//       const rightDigit = num[right];
  
//       if (!strobogrammaticPairs.hasOwnProperty(leftDigit) || strobogrammaticPairs[leftDigit] !== rightDigit) {
//         return false;
//       }
  
//       left++;
//       right--;
//     }
  
//     return true;
//   }
  
 
//   const num = "69";
//   console.log(isStrobogrammatic(num)); 


/**
💡 **Question 3**

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.


 */


// function addStrings(num1, num2) {
//     let result = "";
//     let carry = 0;
//     let i = num1.length - 1;
//     let j = num2.length - 1;
  
//     while (i >= 0 || j >= 0 || carry > 0) {
//       const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
//       const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
  
//       const sum = digit1 + digit2 + carry;
//       const digitSum = sum % 10;
//       carry = Math.floor(sum / 10);
  
//       result = digitSum.toString() + result;
  
//       i--;
//       j--;
//     }
  
//     return result;
//   }
  
 
//   const num1 = "11";
//   const num2 = "123";
//   console.log(addStrings(num1, num2)); 
  

/**
 
💡 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 
 */



// function reverseWords(s) {
//     const words = s.split(" ");
//     const reversedWords = [];
  
//     for (let word of words) {
//       const reversedWord = word.split("").reverse().join("");
//       reversedWords.push(reversedWord);
//     }
  
//     return reversedWords.join(" ");
//   }
  
//   const s = "Let's take LeetCode contest";
//   console.log(reverseWords(s)); 
  

/**
 * <aside>
💡 **Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 */


// function reverseStr(s, k) {
//     const n = s.length;
//     const arr = s.split(""); 
  
//     for (let i = 0; i < n; i += 2 * k) {
//       let left = i;
//       let right = Math.min(i + k - 1, n - 1);
  
      
//       while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]; 
//         left++;
//         right--;
//       }
//     }
  
//     return arr.join(""); 
//   }
  
  
//   const s = "abcdefg";
//   const k = 2;
//   console.log(reverseStr(s, k)); 
  


/***

💡 **Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.


 */


// function rotateString(s, goal) {
//     if (s.length !== goal.length) {
//       return false; 
//     }
  
//     const rotatedString = s + s;
  
//     return rotatedString.includes(goal);
//   }
  
  
//   const s = "abcde";
//   const goal = "cdeab";
//   console.log(rotateString(s, goal)); 

  
  /**
  
💡 **Question 7**

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

 */


// function applyBackspaces(s) {
//     const stack = [];
  
//     for (let char of s) {
//       if (char !== '#') {
//         stack.push(char);
//       } else {
//         if (stack.length > 0) {
//           stack.pop();
//         }
//       }
//     }
  
//     return stack.join("");
//   }
  
//   function backspaceCompare(s, t) {
//     return applyBackspaces(s) === applyBackspaces(t);
//   }
  
 
//   const s = "ab#c";
//   const t = "ad#c";
//   console.log(backspaceCompare(s, t));
  

/**
 * 
💡 **Question 8**

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 */



// function checkStraightLine(coordinates) {
//     const n = coordinates.length;
//     if (n <= 2) {
//       return true; 
//     }
  
//     const [x0, y0] = coordinates[0];
//     const [x1, y1] = coordinates[1];
//     const slope = getSlope(x0, y0, x1, y1);
  
//     for (let i = 2; i < n; i++) {
//       const [xi, yi] = coordinates[i];
//       const [xiMinus1, yiMinus1] = coordinates[i - 1];
  
//       if (getSlope(xiMinus1, yiMinus1, xi, yi) !== slope) {
//         return false; 
//       }
//     }
  
//     return true; 
//   }
  
//   function getSlope(x1, y1, x2, y2) {
//     if (x1 === x2) {
//       return Infinity; 
//     }
  
//     return (y2 - y1) / (x2 - x1);
//   }
  
//   const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
//   console.log(checkStraightLine(coordinates));
  