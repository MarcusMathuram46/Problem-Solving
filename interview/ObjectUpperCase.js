// Write a Javascript Function to turn the Keys as Capital Letter  / Uppercase

// Input ={jack:"Three", jill: "Two",And:"one"};
// Expected Output= {JACK: "Three",JILL: "Two",AND: "one"}

// Key :Val                Keys : Capital Letter  / Uppercase                     Value : Remain the same

let Input ={jack:"Three", jill: "Two",And:"one"};
let result={};

Object.keys(Input).forEach(key=>{
    result[key.toUpperCase()]=Input[key]
})

console.log(result);


// console.log(Input['jill']);
// console.log(Input.jill);
// console.log(Object.keys(Input));
// console.log(Object.values(Input));
// console.log(Object.entries(Input)); 

// const target = { a: 1 };
// const source = { b: 2, c: 3 };
// const merged = Object.assign(target, source);
// console.log(merged);
// const merged = { ...target, ...source };
// console.log(merged);