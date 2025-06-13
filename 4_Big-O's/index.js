"use strict";
// O(1) — Constant Time Algorithms
function getFirstElement(arr) {
    return arr[0];
}
function isEven(num) {
    return num % 2 === 0;
}
// O(n) — Linear Time Algorithms
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
function countOccurrences(arr, value) {
    let count = 0;
    for (let item of arr) {
        if (item === value)
            count++;
    }
    return count;
}
// O(log n) — Logarithmic Time Algorithms,
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target)
            return true;
        else if (arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return false;
}
function logBase2(n) {
    let count = 0;
    while (n > 1) {
        n = Math.floor(n / 2);
        count++;
    }
    return count;
}
