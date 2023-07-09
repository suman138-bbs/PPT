/**
 
💡 **Question 1**

Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

 */


// function minimumDeleteSum(s1, s2) {
//     const m = s1.length;
//     const n = s2.length;
  
    
//     const dp = new Array(m + 1);
//     for (let i = 0; i <= m; i++) {
//       dp[i] = new Array(n + 1);
//       dp[i][0] = i > 0 ? dp[i - 1][0] + s1.charCodeAt(i - 1) : 0;
//     }
//     dp[0] = dp[0].fill(0, 0, n + 1);
  
    
//     for (let i = 1; i <= m; i++) {
//       for (let j = 1; j <= n; j++) {
//         if (s1[i - 1] === s2[j - 1]) {
//           dp[i][j] = dp[i - 1][j - 1];
//         } else {
//           dp[i][j] = Math.min(
//             dp[i - 1][j] + s1.charCodeAt(i - 1),
//             dp[i][j - 1] + s2.charCodeAt(j - 1)
//           );
//         }
//       }
//     }
  
//     return dp[m][n];
//   }
  
 
//   const s1 = "sea";
//   const s2 = "eat";
//   console.log(minimumDeleteSum(s1, s2));
  
/**
💡 **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

 */


// function isValid(s) {
//     const stack = [];
  
//     for (let char of s) {
//       if (char === '(' || char === '*') {
//         stack.push(char);
//       } else {
//         if (stack.length === 0) {
//           return false; 
//         }
  
//         let foundOpeningParenthesis = false;
//         while (stack.length > 0 && stack[stack.length - 1] !== '(') {
//           stack.pop(); 
//         }
  
//         if (stack.length === 0) {
//           foundOpeningParenthesis = true; 
//         } else {
//           stack.pop();
//           foundOpeningParenthesis = true;
//         }
  
//         if (!foundOpeningParenthesis) {
//           return false; 
//         }
//       }
//     }
  
    
//     while (stack.length > 0 && stack[stack.length - 1] === '(') {
//       stack.pop();
//     }
  
//     return stack.length === 0; // Stack should be empty if all parentheses are matched
//   }
  
 
//   const s = "()";
//   console.log(isValid(s)); 
  


/**

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.


 */


// function minDistance(word1, word2) {
//     const m = word1.length;
//     const n = word2.length;
  
//     const dp = new Array(m + 1);
//     for (let i = 0; i <= m; i++) {
//       dp[i] = new Array(n + 1);
//       dp[i][0] = i;
//     }
//     dp[0] = dp[0].fill(0, 0, n + 1);
  
    
//     for (let i = 1; i <= m; i++) {
//       for (let j = 1; j <= n; j++) {
//         if (word1[i - 1] === word2[j - 1]) {
//           dp[i][j] = dp[i - 1][j - 1];
//         } else {
//           dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
//         }
//       }
//     }
  
//     return dp[m][n];
//   }
  

//   const word1 = "sea";
//   const word2 = "eat";
//   console.log(minDistance(word1, word2));
  


/**
💡 **Question 4**

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.

 */

// class TreeNode {
//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function str2tree(s) {
//     if (s.length === 0) {
//       return null;
//     }
  
//     let numEnd = 0;
//     while (numEnd < s.length && s[numEnd] !== "(" && s[numEnd] !== ")") {
//       numEnd++;
//     }
  
//     const root = new TreeNode(parseInt(s.slice(0, numEnd)));
  
//     if (numEnd === s.length) {
//       return root;
//     }
  
//     let count = 0;
//     let leftStart = numEnd;
//     for (let i = numEnd; i < s.length; i++) {
//       if (s[i] === "(") {
//         count++;
//       } else if (s[i] === ")") {
//         count--;
//       }
  
//       if (count === 0 && leftStart === numEnd) {
//         leftStart = i + 1;
//       }
  
//       if (count === 0 && s[i] === "(") {
//         root.left = str2tree(s.slice(leftStart, i));
//         leftStart = i + 1;
//       }
  
//       if (count === 0 && s[i] === ")") {
//         root.right = str2tree(s.slice(leftStart, i));
//       }
//     }
  
//     return root;
//   }
  
//   function inorderTraversal(root) {
//     const result = [];
  
//     function inorder(node) {
//       if (node === null) {
//         return;
//       }
  
//       inorder(node.left);
//       result.push(node.val);
//       inorder(node.right);
//     }
  
//     inorder(root);
//     return result;
//   }
  
//   // Test example
//   const s = "4(2(3)(1))(6(5))";
//   const root = str2tree(s);
//   console.log(inorderTraversal(root));
  

/**
 
💡 **Question 5**

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.

The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done **modifying the input array,** return *the new length of the array*.

 */


// function compress(chars) {
//     let writePtr = 0; 
//     let readPtr = 0; 
  
//     while (readPtr < chars.length) {
//       let currentChar = chars[readPtr];
//       let count = 0;
  
      
//       while (readPtr < chars.length && chars[readPtr] === currentChar) {
//         readPtr++;
//         count++;
//       }
  
      
//       chars[writePtr] = currentChar;
//       writePtr++;
  
//       if (count > 1) {
//         let countStr = count.toString();
  
       
//         for (let i = 0; i < countStr.length; i++) {
//           chars[writePtr] = countStr[i];
//           writePtr++;
//         }
//       }
//     }
  
//     return writePtr; 
//   }
  

//   const chars = ["a", "a", "b", "b", "c", "c", "c"];
//   console.log(compress(chars)); 
//   console.log(chars.slice(0, 6)); 
  

/**
💡 **Question 6**

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*
 */


// function findAnagrams(s, p) {
//     const result = [];
//     const targetFreqMap = createFrequencyMap(p);
//     const windowFreqMap = {};
  
//     let left = 0;
//     let right = 0;
//     let count = 0;
  
//     while (right < s.length) {
//       const currentChar = s[right];
//       if (targetFreqMap[currentChar]) {
//         windowFreqMap[currentChar] = (windowFreqMap[currentChar] || 0) + 1;
//         if (windowFreqMap[currentChar] <= targetFreqMap[currentChar]) {
//           count++;
//         }
//       }
  
//       if (right - left + 1 === p.length) {
//         if (count === p.length) {
//           result.push(left);
//         }
  
//         const leftChar = s[left];
//         if (targetFreqMap[leftChar]) {
//           windowFreqMap[leftChar]--;
//           if (windowFreqMap[leftChar] < targetFreqMap[leftChar]) {
//             count--;
//           }
//         }
  
//         left++;
//       }
  
//       right++;
//     }
  
//     return result;
//   }
  
//   function createFrequencyMap(str) {
//     const freqMap = {};
//     for (let char of str) {
//       freqMap[char] = (freqMap[char] || 0) + 1;
//     }
//     return freqMap;
//   }
  
//   const s = "cbaebabacd";
//   const p = "abc";
//   console.log(findAnagrams(s, p)); 
  


/**
**Question 7**

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.
*/


// function decodeString(s) {
//     const stack = [];
//     let currentString = '';
//     let currentNumber = 0;
  
//     for (let char of s) {
//       if (char === '[') {
//         stack.push(currentString);
//         stack.push(currentNumber);
//         currentString = '';
//         currentNumber = 0;
//       } else if (char === ']') {
//         let prevNumber = stack.pop();
//         let prevString = stack.pop();
//         currentString = prevString + currentString.repeat(prevNumber);
//       } else if (parseInt(char) >= 0) {
//         currentNumber = currentNumber * 10 + parseInt(char);
//       } else {
//         currentString += char;
//       }
//     }
  
//     return currentString;
//   }
  
  
//   const s = "3[a]2[bc]";
//   console.log(decodeString(s)); 
  


/**
💡 **Question 8**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

 */

// function buddyStrings(s, goal) {
//     if (s.length !== goal.length) {
//       return false;
//     }
  
//     if (s === goal) {
//       const seen = new Set();
//       for (let char of s) {
//         if (seen.has(char)) {
//           return true;
//         }
//         seen.add(char);
//       }
//       return false;
//     }
  
//     let firstDiff = -1;
//     let secondDiff = -1;
  
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] !== goal[i]) {
//         if (firstDiff === -1) {
//           firstDiff = i;
//         } else if (secondDiff === -1) {
//           secondDiff = i;
//         } else {
//           return false;
//         }
//       }
//     }
  
//     return (
//       secondDiff !== -1 &&
//       s[firstDiff] === goal[secondDiff] &&
//       s[secondDiff] === goal[firstDiff]
//     );
//   }
//   const s = "ab";
//   const goal = "ba";
//   console.log(buddyStrings(s, goal));
  