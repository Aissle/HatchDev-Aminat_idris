// big O's and 2 examples each
// O(1) — Constant Time Algorithms
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// O(n) — Linear Time Algorithms
function sumArray(arr: number[]): number {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
function countOccurrences<T>(arr: T[], value: T): number {
  let count = 0;
  for (let item of arr) {
    if (item === value) count++;
  }
  return count;
}

// O(log n) — Logarithmic Time Algorithms,
function binarySearch(arr: number[], target: number): boolean {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}
function logBase2(n: number): number {
  let count = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    count++;
  }
  return count;
}
