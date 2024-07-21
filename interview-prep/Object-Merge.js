// Object Merge: Write a function that takes two objects as input and merges them into a single object, with keys from both objects combined, and values from the second object overwriting values from the first object in case of key conflicts.
// Sample Input:
// {a: 1, b: 2} 
// { b: 3, c: 4}
// Sample Output:
// {a: 1, b: 3, c: 4}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

console.log({...obj1, ...obj2});