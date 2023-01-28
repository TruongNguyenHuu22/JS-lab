function uniqueNumbers(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) {
        return [];
    }

    const uniqueNumberSet = new Set(numberList);

    return [...uniqueNumberSet];
}

function uniqueLetters(str) {
    if (str.length === 0) return "";

    const uniqueLetterSet = new Set(str);
    return [...uniqueLetterSet].join("");
}

function uniqueLetters(str) {
    if (str.length === 0) return "";

    const uniqueLetterSet = new Set(str);
    return [...uniqueLetterSet].join("");
}

function getIntersectionSet(set1, set2) {
    if (!Array.isArray(set1) || set1.length === 0) {
        return [];
    }
    if (!Array.isArray(set2) || set2.length === 0) {
        return [];
    }

    const uniqueSet1 = new Set(set1);
    const uniqueSet2 = new Set(set2);

    const interSectionSet = new Set();

    uniqueSet1.forEach((item) => {
        if (uniqueSet2.has(item)) {
            interSectionSet.add(item);
        }
    });
    return [...interSectionSet];
}
console.log(getIntersectionSet([1, 2, 3, 4], [2, 5, 6]));
