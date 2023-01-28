function binarySearch(numberList, target) {
    if (!Array.isArray(numberList) || numberList.length === 0) return -1;

    let left = 0;
    let right = numberList.length - 1;
    while (left <= right) {
        let mid = left + Math.trunc(right - left);
        if (numberList[mid] === target) return mid;
        if (numberList[mid] < target) {
            left = mid + 1;
        }
        right = mid - 1;
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 0));
console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
