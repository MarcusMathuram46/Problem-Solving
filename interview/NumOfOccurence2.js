// Write a  js program which will build an object which is containing the keys as the integers of
//  arrays and their values will be the count of occurrences of that integer in the array. Add an integer
//  to that object             
// Eg: data = [4, 6, 2, 8, 9, 2, 6, 7, 6],
// output = { 6: 3,2: 2}


function OccurrenceOfNum(arr){
    const countMap={}
    arr.forEach(num=>{
        if(countMap[num]){
            countMap[num]++;
        }else{
            countMap[num]=1;
        }
    })
    const filteredCount={};
    for(const key in countMap){
        if(countMap[key]>1){
            filteredCount[key]=countMap[key];
        }
    }
    return filteredCount;

}

const data = [4, 6, 2, 8, 9, 2, 6, 7, 6];
const output=OccurrenceOfNum(data);
console.log(output);