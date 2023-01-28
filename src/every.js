function every(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) return false;
    }
    return true;
}
const arr = [2, 3, 6];
console.log(every(arr));
