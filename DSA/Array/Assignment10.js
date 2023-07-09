/**
💡 **Question 1**

Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.


 */

// function isPowerOfThree(n) {
//     return n > 0 && 1162261467 % n === 0;
//   }
  
  
//   console.log(isPowerOfThree(27)); 
  


/**
💡 **Question 2**

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.
*/
// function lastRemaining(n) {
//     let leftToRight = true;
//     let remaining = n;
//     let step = 1;
//     let head = 1;
  
//     while (remaining > 1) {
//       if (leftToRight || remaining % 2 === 1) {
//         head += step;
//       }
  
//       remaining = Math.floor(remaining / 2);
//       step *= 2;
//       leftToRight = !leftToRight;
//     }
  
//     return head;
//   }
  

//   console.log(lastRemaining(9)); 
  
  
  


  /**
   
💡 **Question 3**

****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.


   */


// function generateSubsets(set, currentSubset, index, result) {
//     if (index === set.length) {
//       result.push(currentSubset);
//       return;
//     }
  
//     generateSubsets(set, currentSubset, index + 1, result); 
//     generateSubsets(set, currentSubset + set[index], index + 1, result); 
//   }
  
//   function printSubsets(set) {
//     const result = [];
//     generateSubsets(set, '', 0, result);
//     return result;
//   }
  
//   
//   console.log(printSubsets('abc')); 
//   console.log(printSubsets('abcd')); 


/**

💡 **Question 4**

Given a string calculate length of the string using recursion.

 */

// function calculateLength(str) {
//     if (str === '') {
//       return 0;
//     }
    
//     return 1 + calculateLength(str.slice(1));
//   }
  
  
//   console.log(calculateLength('hello')); 



/**
 * 
💡 **Question 5**

We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

**Examples :**

 */


// function countSubstrings(s) {
//     let count = 0;
  
 
//     for (let i = 0; i < s.length; i++) {
      
//       for (let j = i; j < s.length; j++) {
//         if (s[i] === s[j]) {
//           count++;
//         }
//       }
//     }
  
//     return count;
//   }
  
  
//   console.log(countSubstrings('abc')); 
 
 
  /**
   * 
💡 **Question 6**

 famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

   */


//  function towerOfHanoi(n, source, destination, auxiliary) {
//     if (n === 1) {
//       console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
//       return 1;
//     }
  
//     const moves1 = towerOfHanoi(n - 1, source, auxiliary, destination);
//     console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
//     const moves2 = towerOfHanoi(n - 1, auxiliary, destination, source);
  
//     return moves1 + 1 + moves2;
//   }
  
  
//   console.log(towerOfHanoi(2, 1, 3, 2));



/**
 * 

💡 **Question 7**

Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.


 */


// function printPermutations(str) {
//     const result = [];
//     permute(str, 0, str.length - 1, result);
//     return result;
//   }
  
//   function permute(str, left, right, result) {
//     if (left === right) {
//       result.push(str);
//       return;
//     }
  
//     for (let i = left; i <= right; i++) {
//       str = swap(str, left, i);
//       permute(str, left + 1, right, result);
//       str = swap(str, left, i); // Backtrack
//     }
//   }
  
//   function swap(str, i, j) {
//     const strArray = str.split('');
//     const temp = strArray[i];
//     strArray[i] = strArray[j];
//     strArray[j] = temp;
//     return strArray.join('');
//   }
  
 
//   console.log(printPermutations('cd')); 
 
  


/**
💡 **Question 8**

Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

 */

function countConsonants(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (consonants.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
 
  console.log(countConsonants('Hello')); 
  console.log(countConsonants('JavaScript')); 
  
