
const value = fibonacci(4);

function fibonacci(n){ // Provide an index and it calculates what the fibonacci value should be at that point. O(n) = 2^n
    if(n === 1) return 1;
    else if(n=== 0) return 0;
    else return fibonacci(n-1) + fibonacci(n-2)
}


const newVal = factorial(4);

function factorial(num){
    if(num <= 1) return 1;
    else return num*factorial(num-1);
}

const bUp = SS_divideAndConquer(2,9);
console.log(bUp);

function SS_bottomUp(a,b){
    if(a === b) return a*a;
    else return a*a + SS_bottomUp(a+1, b);
}

function SS_topDown(a,b){
    if(b === a) return b*b;
    else return SS_topDown(a,b-1) + b*b;
}

function SS_divideAndConquer(a,b){
    if(a === b) return a*a;
    else return SS_divideAndConquer(a, a+ parseInt((b-a)/2)) + SS_divideAndConquer(a + parseInt((b-a)/2), b)
}