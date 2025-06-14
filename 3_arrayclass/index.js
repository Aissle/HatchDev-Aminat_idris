"use strict";
//Assignment- create a class called arrays and give it 8 methods that are
// similar to functions that can be performed on arrays such as  split()
// Class Array  - an immitation of an array
// property: data: an array of type T(varies)
class ArrayAminat {
    constructor(data) {
        this.data = data;
    }
    // 1- Returns a shallow copy of a portion of the array.
    slice(start, end) {
        const result = [];
        const finalEnd = end !== undefined ? end : this.data.length;
        for (let i = start; i < finalEnd && i < this.data.length; i++) {
            if (i >= 0) {
                result[result.length] = this.data[i];
            }
        }
        return result;
    }
    // 2- Adds a new item to the end of the array.
    push(item) {
        this.data[this.data.length] = item;
    }
    // 3- Removes the last element of the array and returns it.
    // If the array is empty, returns undefined.
    pop() {
        if (this.data.length === 0)
            return undefined;
        const last = this.data[this.data.length - 1];
        this.data.length = this.data.length - 1;
        return last;
    }
    // 4-4 Creates a new array where each element is the result of applying
    // callback to each element in the original array.
    //note - arguments number and array are for more complex uses
    map(callback) {
        const result = [];
        for (let i = 0; i < this.data.length; i++) {
            result[result.length] = callback(this.data[i], i, this.data);
        }
        return result;
    }
    // 5- Creates a new array with only the elements for which the callback returns true.
    filter(callback) {
        const result = [];
        for (let i = 0; i < this.data.length; i++) {
            if (callback(this.data[i], i, this.data)) {
                result[result.length] = this.data[i];
            }
        }
        return result;
    }
    // 6 - Returns the first element in the array that satisfies the callback condition.
    // If none match, returns undefined.
    find(callback) {
        for (let i = 0; i < this.data.length; i++) {
            if (callback(this.data[i], i, this.data)) {
                return this.data[i];
            }
        }
        return undefined;
    }
    // 7 - Combines all elements of the array into a single value,
    // using the callback function starting from initialValue.
    reduce(callback, initialValue) {
        let acc = initialValue;
        for (let i = 0; i < this.data.length; i++) {
            acc = callback(acc, this.data[i], i, this.data);
        }
        return acc;
    }
    // 8 - Returns a new array with the elements in reverse order,
    // without changing the original array.
    reverse() {
        const result = [];
        for (let i = this.data.length - 1; i >= 0; i--) {
            result[result.length] = this.data[i];
        }
        return result;
    }
    // 9 - returns true if the array contains a specific value.
    includes(value) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === value) {
                return true;
            }
        }
        return false;
    }
    //10 - View current array state
    getData() {
        return this.data;
    }
    // 11. concat()
    concat(...items) {
        console.log("hi");
        const result = [...this.data];
        for (const item of items) {
            if (Array.isArray(item)) {
                result.push(...item);
            }
            else {
                result.push(item);
            }
        }
        return result;
    }
    // 12. join()
    join(separator = ",") {
        let result = "";
        for (let i = 0; i < this.data.length; i++) {
            if (i > 0)
                result += separator;
            result += String(this.data[i]);
        }
        return result;
    }
    // 13. some()
    some(callback) {
        for (let i = 0; i < this.data.length; i++) {
            if (callback(this.data[i], i, this.data)) {
                return true;
            }
        }
        return false;
    }
    // 14. every()
    every(callback) {
        for (let i = 0; i < this.data.length; i++) {
            if (!callback(this.data[i], i, this.data)) {
                return false;
            }
        }
        return true;
    }
    // 15. indexOf()
    indexOf(searchElement, fromIndex = 0) {
        for (let i = fromIndex; i < this.data.length; i++) {
            if (this.data[i] === searchElement) {
                return i;
            }
        }
        return -1;
    }
    // 16
    sort(compareFn) {
        for (let i = 0; i < this.data.length - 1; i++) {
            for (let j = i + 1; j < this.data.length; j++) {
                const shouldSwap = compareFn
                    ? compareFn(this.data[i], this.data[j]) > 0
                    : String(this.data[i]) > String(this.data[j]);
                if (shouldSwap) {
                    const temp = this.data[i];
                    this.data[i] = this.data[j];
                    this.data[j] = temp;
                }
            }
        }
    }
}
//test
const arr8 = new ArrayAminat([6, 7, 8, 9, 0]);
console.log(arr8.slice(1, 4));
arr8.push(6);
// console.log(arr8.getData());
// console.log(arr8.pop());
// console.log(arr8.filter((x) => x % 2 === 0));
// console.log(arr8.map((x) => x * 3));
// console.log(arr8.find((x) => x > 3));
// console.log(arr8.reduce((sum, x) => sum + x, 0));
// console.log(arr8.reverse());
// console.log(arr8.includes(9));
// console.log(arr8.includes(100));
console.log(arr8.concat([1, 2, 3]));
