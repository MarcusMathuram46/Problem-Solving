// Write a Javascript Function to find the Number of  Occurrence of Each String in the Array,  can use any one of the Method Map, Filter, Object Method, For, Foreach 


// Input = ["jack","And","jack", "jill","jack","jill"]

// Expected output: ["jack": 3, "jill": 2,"And":1]


// Output may be a  [Key : Val ]- List      or       {Key : Val }- Object 
function numberOfOccurrence(arr){
    const countMap=arr.reduce((acc, str)=>{
        acc[str]=(acc[str]||0)+1;
        return acc;
    }, {});
    return Object.entries(countMap).map(([key, value])=>`${key}: ${value}`)
}

const Input = ["jack","And","jack","jill","jack","jill"]
const output=numberOfOccurrence(Input);
console.log(output);
