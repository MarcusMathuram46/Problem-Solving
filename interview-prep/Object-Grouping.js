// Object Grouping: Write a function that takes an array of objects and groups them by a specified property value, returning an object where the keys are the property values and the values are arrays of objects with that property value.
// Sample Input:
// [
//     { name: 'Alice', age: 25, gender: 'female' }, 
//     {name: 'Bob', age: 30, gender: 'male' }, 
//     { name: 'Charlie', age: 22, gender: 'male'}, 
//     {name: 'Dave', age: 35, gender: 'male'},
// ]
// 'gender'
// Sample Output:
// {
//     female: [
//         {name: 'Alice', age: 25, gender: 'female'}
//     ],
//     male: [
//         {name: 'Bob', age: 30, gender: 'male'},
//     ]
    
// }


let arr= [
    { name: 'Alice', age: 25, gender: 'female' }, 
    {name: 'Bob', age: 30, gender: 'male' }, 
    { name: 'Charlie', age: 22, gender: 'male'}, 
    {name: 'Dave', age: 35, gender: 'male'},
    { name: 'Eva', age: 26, gender: 'female' },
    { name: 'rose', age: 27, gender: 'female' }, 
]

let key = "gender";


console.log(arr.reduce((accum, val)=>{
    // console.log(val, val[key], accum);
    if(accum[val[key]]){
        accum[val[key]].push(val);
    } else{
        accum[val[key]] = [val];
    }
    return accum;
},{}));