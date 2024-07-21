// Write a Javascript Function to find the Number  of Occurrence of Each element in the Array, can use any one of the Method Map, Filter, Object Method, For, Foreach 

// Input = [3,4,3,5,3,6] 

// Expected Output : [3:3,4:1,5:1,6:1] 

// Output may be a  [Key : Val ]- List      or       {Key : Val }- Object 

function countOccurences(arr){
    const countMap={};

    arr.forEach(num=>{
        if(countMap[num]){
            countMap[num]++;
        }else{
            countMap[num]=1;
        }
    })
    let result=Object.entries(countMap).map(([key, value])=>`${key}:${value}`)
    return result;
}


let Input = [3,4,3,5,3,6];
let output = countOccurences(Input);
console.log(output);


