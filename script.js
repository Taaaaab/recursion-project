// Fibonacci Sequence using Recursion

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

function fibsRec(n) {
   
}