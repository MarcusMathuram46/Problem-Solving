// Object Deep Comparison: Write a function that takes two objects as input and returns true if they are deeply equal, meaning that all their properties and nested properties have the same values, and false otherwise.
// Sample Input:
// {a: 1, b: { c: 2}, d: [3, 4] } 
// {a: 1, b: {c: 2}, d: [3, 4]}
// Sample Output: true


const obj={a: 1, b: {c: 2}, d: [3, 4]}
const obj1={a: 1, b: {c: 2}, d: [3, 4]}

const compare =(obj, obj1)=>{
    if(typeof obj != typeof obj1) return false;
    if(Object.keys(obj).length != Object.keys(obj1).length)
        return false;

    for(let key of Object.keys(obj)){
        if(typeof obj[key] =="object"){
            let x = compare(obj[key], obj1[key]);
            if (!x){
                return false;
            }
        }else if(obj[key] != obj1[key]) return false; 
    }
    return true;
}
console.log(compare(obj, obj1));