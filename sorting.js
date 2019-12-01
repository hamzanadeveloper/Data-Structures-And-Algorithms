let arr = [2,3,5,1,4,6];
let arr1 = [2,3,5,1,4,6];
let arr2 = [2,3,5,1,4,6];
let arr3 = [2,3,5,1,4,6];
let arr4 = [2,3,5,1,4,6];

console.log("Selection Sort");
let selectionSorted = selectionSort(arr);
console.log(selectionSorted);

console.log("Bubble Sort");
let bubbleSorted = bubbleSort(arr1);
console.log(bubbleSorted);

console.log("Merge Sort");
let mergeSorted = mergeSort(arr2);
console.log(mergeSorted);

console.log("Quick Sort");
let quickSorted = quickSort(arr3);
console.log(quickSorted);

console.log("Heap Sort");
let heapSorted = heapSort(arr4);
console.log(heapSorted);

function selectionSort(arr){ //    O(n) = n^2
    let maxPos, temp, i, j, n = arr.length;

    for(i = n-1; i > 0; --i){
        maxPos = i;
        for(j = 0; j < i; j++){
            if(arr[j] > arr[maxPos]) maxPos = j;
        }
        temp = arr[i];
        arr[i] = arr[maxPos];
        arr[maxPos] = temp;
    }
    return arr;
}

function bubbleSort(arr){ // O(n^2)
    let swap = false;
    for(let i = 0;i < arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            swap = true;
        }
    }

    if(swap === true)
        bubbleSort(arr);
    else
        console.log(arr);
        return arr;
}

function mergeSort (unsortedArray) { // O(nlog n) n because of the comparisons, log n because the number of levels.
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}


function quickSort(origArray) { //Best generic sorting method with runtime complexity of O(nlog(n)), but worst runtime of O(n^2)
    if (origArray.length <= 1) {
        return origArray;
    } else {

        let left = [];
        let right = [];
        let newArray = [];
        let pivot = origArray.pop();
        let length = origArray.length;

        for (let i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}
let array_length;

function heap_root(input, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max); //If the child node is bigger than the parent node, swap them
        heap_root(input, max); //if the child has children themselves, repeat the operation.
    }
}

function swap(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {

    array_length = input.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      { //percolate the internal nodes, percolating the last root node down.
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        console.log(input);
        swap(input, 0, i);
        array_length--;

        heap_root(input, 0);
    }

    return input;
}
