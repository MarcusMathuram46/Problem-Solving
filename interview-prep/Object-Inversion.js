// Object Inversion: Write a function that takes an object as input and returns a new object where the keys and values are swapped.
// Sample Input:
// {a: 1, b: 2, c: 3}
// Sample Output:
// {1: 'a', 2: 'b', 3: 'c'}


let obj = {a: 1, b: 2, c: 3};

let result = {};

for(let key in obj){
    result[obj[key]] = key;
}

console.log(result);

// const obj = {a: 1, b: 2, c: 3};

// let key = Object.keys(obj);

// let value = Object.values(obj);
// let result ={};
// for(let i=0; i<key.length; i++){
//     result[value[i]] = key[i];
// }

console.log(result);
// const invertedObj = Object.entries(obj).reduce((acc, [key, value]) => {
//   acc[value] = key;
//   return acc;
// }, {});
// console.log(invertedObj);
