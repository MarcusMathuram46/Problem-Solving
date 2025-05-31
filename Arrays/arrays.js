// Day1
// 1. length and indexing
let str = "Hello World";
let arr = str.length;
console.log(arr); // Outputs: 11
console.log(str[0]); // Outputs: "H"
console.log(str.charAt(1)); // Outputs: "H"



// 2. .toUpperCase() and .toLowerCase()

let upperStr = str.toUpperCase();
let lowerStr = str.toLowerCase();
console.log(upperStr); // Outputs: "HELLO WORLD"
console.log(lowerStr); // Outputs: "hello world"

// 3. .slice() and .substring()
let slicedStr = str.slice(0, 5);
let substringStr = str.substring(0, 5);
console.log(slicedStr); // Outputs: "Hello"
console.log(substringStr); // Outputs: "Hello"

// 4. .indexOf(), .includes(), .replace()
let index = str.indexOf("W");
let includes = str.includes("World");
let replacedStr = str.replace("World", "JavaScript");
console.log(index); // Outputs: 6
console.log(includes); // Outputs: true
console.log(replacedStr); // Outputs: "Hello JavaScript"

// 5. .charAt() and .trim()
let charAtStr = str.charAt(0);
let trimmedStr = str.trim();
console.log(charAtStr); // Outputs: "H"
console.log(trimmedStr); // Outputs: "Hello World"

// Reversing a string
function reverseString(str){
  return str.split('').reverse().join('');
}

let reversedStr = reverseString(str);
console.log(reversedStr); // Outputs: "dlroW olleH"

//  2. Count Vowels in a String

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;

}
let vowelCount = countVowels(str);
console.log(vowelCount); // Outputs: 3
// 3. Check if a String is a Palindrome
function isPalindrome(str) {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("Madam")); // Outputs: true
console.log(isPalindrome("Hello")); // Outputs: false

// Day-2
// 📘 .split() and .join()
let sentence = "Hello World";
let words = sentence.split(" ");
let joinedSentence = words.join("-");
console.log(words); // Outputs: ["Hello", "World"]
console.log(joinedSentence); // Outputs: "Hello-World"

// 📘 .replaceAll()
let text = "Hello World, Hello Universe";
let replacedText = text.replaceAll("Hello", "Hi");
console.log(replacedText); // Outputs: "Hi World, Hi Universe"

// 📘 Basic Regex Usage in String Replacement
let regexText = "Hello 123, Hello 456";
let regexReplacedText = regexText.replace(/Hello/g, "Hi");
console.log(regexReplacedText); // Outputs: "Hi 123, Hi 456"

let input = "   too     many   spaces   ";

let cleaned = input.replace(/\s+/g, " ").trim(); 
console.log(cleaned); // "too many spaces"

//  1. Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
let capitalizedStr = capitalizeWords("hello world");
console.log(capitalizedStr); // Outputs: "Hello World"

//  2. Find the Longest Word in a Sentence
function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
let longestWord = findLongestWord("The quick brown fox jumps over the lazy dog");
console.log(longestWord); // Outputs: "jumps"

// ✅ 3. Replace All Spaces with Hyphens
function replaceSpacesWithHyphens(str) {
  return str.replace(/\s+/g, "-");
}
let hyphenatedStr = replaceSpacesWithHyphens("Hello World, How are you?");
console.log(hyphenatedStr); // Outputs: "Hello-World,-How-are-you


// 🔹 Core Array Methods
// 1. .push() – Add to end
// 2. .pop() – Remove from end
// 3. .shift() – Remove from start
// 4. .unshift() – Add to start
// 5. .splice() – Add/Remove at specific index
// 6. .slice() – Extract a portion
// 7. .concat() – Merge arrays
// 8. .join() – Convert to string
// 9. .indexOf() – Find index of an element
// 10. .includes() – Check if element exists
// 11. .map() – Transform elements
// 12. .filter() – Filter elements
// 13. .reduce() – Aggregate values
// 14. .forEach() – Iterate over elements
// 15. .find() – Find first matching element
// 16. .findIndex() – Find index of first matching element
// 17. .every() – Check if all elements match a condition
// 18. .some() – Check if any element matches a condition
// 19. .sort() – Sort elements
// 20. .reverse() – Reverse order of elements
// 21. .fill() – Fill array with a value
// 22. .flat() – Flatten nested arrays
// 23. .flatMap() – Map and flatten in one step
// 24. .toString() – Convert to string representation
// 25. .copyWithin() – Copy part of an array to another location
// 26. .entries() – Get an iterator for key-value pairs
// 27. .keys() – Get an iterator for keys
// 28. .values() – Get an iterator for values
// 29. .from() – Create an array from an iterable or array-like object
// 30. .of() – Create an array with specified elements
// 31. .isArray() – Check if an object is an array
// 32. .toLocaleString() – Convert to localized string representation
// 33. .toLocaleLowerCase() – Convert to localized lowercase string
// 34. .toLocaleUpperCase() – Convert to localized uppercase string
// 35. .toLocaleDateString() – Convert to localized date string
// 36. .toLocaleTimeString() – Convert to localized time string
// 37. .toLocaleString() – Convert to localized string representation
// 38. .toExponential() – Convert to exponential notation
// 39. .toFixed() – Convert to fixed-point notation
// 40. .toPrecision() – Convert to specified precision
// 41. .sort() – Sort elements in place
// 42. .reverse() – Reverse elements in place
// 43. .fill() – Fill array with a static value
// 44. .copyWithin() – Copy part of an array to another location
// 45. .findLast() – Find last matching element
// 46. .findLastIndex() – Find index of last matching element

let arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4]
arr.pop();          // [1, 2, 3]
arr.shift();        // [2, 3]
arr.unshift(0);    // [0, 2, 3]
arr.splice(1, 1, 5); // [0, 5, 3] (remove 2, add 5 at index 1)

// 🔹 Access, Length, and Loops
console.log(arr[0]); // Outputs: 0
console.log(arr.length); // Outputs: 3
// For loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// For-of loop
for (let num of arr) {
  console.log(num);
}
let nums = [5, 10, 15, 20];

console.log(nums.indexOf(15));   // 2
console.log(nums.includes(25));  // false

// ✅ 1. Remove Duplicates Manually
function removeDuplicates(arr) {
  let unique = [];

  for (let val of arr) {
    if (!unique.includes(val)) {
      unique.push(val);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 1, 4])); 
// Output: [1, 2, 3, 4]

// ✅ 2. Find Second Largest Number
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 5, 20, 8])); 
// Output: 10
// 3. Merge Two Sorted Arrays
function mergeSorted(arr1, arr2) {
  let i = 0, j = 0, result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]
