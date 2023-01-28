function quickSort(numberList, left, right) {
    if (left >= right) return numberList;

    const pivot = partition(numberList, left, right);
    quickSort(numberList, left, pivot - 1);
    quickSort(numberList, pivot, right);

    return numberList;
}

function partition(numberList, left, right) {
    const mid = left + Math.trunc((right - left) / 2);
    const pivot = numberList[mid];

    let i = left;
    let j = right;

    while (i <= j) {
        while (numberList[i] < pivot) i++;
        while (numberList[j] > pivot) j--;

        if (i < j) {
            const temp = numberList[i];
            numberList[i] = numberList[j];
            numberList[j] = temp;
        }
        i++;
        j--;
    }

    return i;
}

console.log(quickSort([2, 4, 3, 6, 5, 9, 7, 1], 0, 7));
