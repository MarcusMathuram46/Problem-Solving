// Array Flattening: Write a function that takes an array of nested arrays and flattens it into a single array with no nested arrays.
// Sample Input:
// [1, [2, [3, 4], 5], 6, [7, 8]]
// Sample Output:
// [1, 2, 3, 4, 5, 6, 7, 8]

// this is used to flatten the array into a single array by using flat method in array.
// let arr = [1, [2, [3, 4], 5], 6, [7, 8]];
// let flatArr = arr.flat(3);
// console.log(flatArr);

let arr = [1, [2, [3, 4], 5], 6, [7, 8]];
const flat = (arr) => {
  let resultArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
        let x=flat(val);
      resultArr = [...resultArr, ...x];
    } else {
      resultArr.push(val);
    }
  }
  return resultArr;
};
console.log(flat(arr));


