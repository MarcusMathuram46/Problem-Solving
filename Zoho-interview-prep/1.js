// Given k sorted arrays of possibly different sizes, merge them and print the sorted output.
// Input Size : N<=100
// Example:
// INPUT
// k = 3
// 1 3
// 2 4 6
// 0 9 10 11
// OUTPUT
// 0 1 2 3 4 6 9 10 11

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const k = parseInt(userInput[0]);
  const arrays = userInput.slice(1).map(line => line.split(' ').map(Number));
  const mergedArray = mergeKSortedArrays(arrays);
  console.log(mergedArray.join(' '));
});

class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val){
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while(index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex]
      if(parent <= element) break;
      this.heap[index] = parent;
      this.heap[parentIndex]=element;
      index = parentIndex;
    }
  }

  extractMin(){
    const min = this.heap[0];
    const end = this.heap.pop();
    if(this.heap.length>0){
      this.heap[0]=end;
      this.sinkDown(0);
    }
    return min;
  }
  sinkDown(index) {
    let leftChildIdx = 2*index + 1;
    let rightChildIdx = 2*index + 2;
    let length = this.heap.length;
    let element=this.heap[index]MinHeap;
    let swap=null;
    if (leftChildIdx < length) {
      let leftChild = this.heap[leftChildIdx];
      if (leftChild < element) {
        swap = leftChildIdx;
      }
    }
    if (rightChildIdx < length) {
      let rightChild = this.heap[rightChildIdx];
      if (
        (swap === null && rightChild < element) || 
        (swap !== null && rightChild < this.heap[swap])
      ) {
        swap = rightChildIdx;
      }
    }
    if (swap === null) return;
    this.heap[index] = this.heap[swap];
    this.heap[swap] = element;
    this.sinkDown(swap);
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}
function mergeKSortedArrays(arrays) {
  const minHeap=new MinHeap();
  const result=[];
  const iterators = arrays.map(arr=> arr[Symbol.iterator]());
  for(let i=0; i< iterators.length; i++) {
    const { value, done }=iterators[i].next();
    if(!done) {
      minHeap.insert({value, arrayIndex:i});
    }
  }
  while(!minHeap.isEmpty()) {
    const { value, arrayIndex } = minHeap.extractMin();
    result.push(value);
    const { value: nextValue, done} = iterators[arrayIndex].next();
    if(!done) {
      minHeap.insert({value: nextValue, arrayIndex});
    }
  }
  return result;
}