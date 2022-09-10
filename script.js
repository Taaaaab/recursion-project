// Fibonacci Sequence using Iteration

function fibs(n) {
    let n1 = 0;
    let n2 = 1;
    let myArr = [n1, n2];

    while (myArr.length < n) {
    let nextNum = n1 + n2;
        myArr.push(nextNum);
        n1 = n2;
        n2 = nextNum;
    }
return myArr;
}

// console.log(fibs(8));

// Fibonacci Sequence using Recursion

function fibsRec (n) {
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const arr = fibsRec(n - 1)
    return [...arr, arr[n-1] + arr[n-2]]
   
};

// console.log(fibsRec(8));

// Building Merge Sort Function
// on input of n elements
// if n < 2
// return
// else 
// sort left half of elements
// sort right half of elements
// merge sorted halves

const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if (leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

const mergeSort = array => {
    if (array.length < 2) {
        return array;
    } 

    // split in half
    const m = Math.floor(array.length / 2);
    const leftArr = array.slice(0, m);
    const rightArr = array.slice(m);
    
    // merge sorted sub-arrays
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
};


console.log(mergeSort([9, 6, 5, 1, 2, 0]));