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

console.log(fibs(8));

// Fibonacci Sequence using Recursion

function fibsRec (n) {
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const arr = fibsRec(n - 1)
    return [...arr, arr[n-1] + arr[n-2]]
   
};

console.log(fibsRec(8));