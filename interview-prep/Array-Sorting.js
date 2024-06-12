// Array Sorting: Write a function that takes an array of objects, where each object has a "name" property (a string) and an "age" property (a number), and returns a new array of objects sorted by age in ascending order.

// Sample Input:
// [
// {name: 'Alice', age: 25}, {name: 'Bob', age: 30}, { name: 'Charlie', age: 22}, {name: 'Dave', age: 35}
// ]

// Sample Output:
// [
// {name: 'Charlie', age: 22}, {name: 'Alice', age: 25}, { name: 'Bob', age: 30 }, {name: 'Dave', age: 35}
// ]

let arr=[
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30}, 
    { name: 'Charlie', age: 22}, 
    {name: 'Dave', age: 35}
]

arr=arr.sort((a, b)=>{     //return a-b means ascending order whereas b-a means descending order for Sorting
    return a.age-b.age;
})
console.log(arr);