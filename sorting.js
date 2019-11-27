var arr = [2,3,5,1,4,6];
var arr1 = [2,3,5,1,4,6];
var arr2 = [2,3,5,1,4,6];
var arr3 = [2,3,5,1,4,6];
var arr4 = [2,3,5,1,4,6];

// console.log("Selection Sort");
// var selectionSorted = selectionSort(arr);
// console.log(selectionSorted);
//
// console.log("Bubble Sort");
// var bubbleSorted = bubbleSort(arr1);
// console.log(bubbleSorted);
//
// console.log("Merge Sort");
// var mergeSorted = mergeSort(arr2);
// console.log(mergeSorted);
//
// console.log("Quick Sort");
// var quickSorted = quickSort(arr3);
// console.log(quickSorted);
//
// console.log("Heap Sort");
// var heapSorted = heapSort(arr4);
// console.log(heapSorted);

console.log("Hamza Selection Sort");
var hselectionSorted = hSelectionSort(arr);
console.log(hselectionSorted);

console.log("Hamza Bubble Sort");
var hbubbleSorted = hBubbleSort(arr1);

console.log("Hamza Merge Sort");
var hmergeSorted = hMergeSort(arr2);
console.log(hmergeSorted);

function selectionSort(arr){ //    O(n) = n^2
    var maxPos, temp, i, j, n = arr.length;

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
    var swap = false;
    for(var i = 0;i < arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            var temp = arr[i+1];
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

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;

        for (var i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}
var array_length;

function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

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
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {

    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      { //percolate the internal nodes, percolating the last root node down.
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


function hSelectionSort(array){
    var n = array.length - 1;
    var maxPos;

    for(var i = n; i > 0; i--){
        var maxPos = i;
        for(var j = 0; j < i; j++){
            if(array[j] > array[maxPos]) maxPos = j;
        }

        var temp = array[i];
        array[i] = array[maxPos];
        array[maxPos] = temp;
    }
    return array;
}

function hBubbleSort(array){
    var swap = false;
    for(var i = 0; i < array.length-1; i++){
        if(array[i] >  array[i+1]){
            var temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            swap = true;
        }
    }
    if(swap === true) hBubbleSort(array);
    else{
        console.log(array);
    }
}

function hMergeSort(array){
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length /2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return hMerge(hMergeSort(left),hMergeSort(right));
}

function hMerge(left, right){
    var result = [], leftIndex = 0, rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));

}

function hQuickSort(arr){
    var pivot = Math.floor(arr.length/2);
}