// Write a JS Code for the below requirement 

// Given a number of steps, find possible ways to reach the top. Number of steps taken can 1 or 2
// n = 3,
// 1 1 1, 1 2, 2 1
// No of ways = 3

function countWays(n){
    if(n===0) return 0;
    if(n===1) return 1;
    if(n===2) return 2;

    const ways=new Array(n+1).fill(0);
    ways[1]=1;
    ways[2]=2;

    for(let i=3;i<=n;i++){
        ways[i]=ways[i-1]+ways[i-2];
    }

    return ways[n];
}

const n=3;
const numberOfWays=countWays(n);
console.log(`Number of ways = ${numberOfWays}`);