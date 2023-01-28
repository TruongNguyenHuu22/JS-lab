function log() {
    console.log("hello");
}

function debounce(callback, wait) {
    let timeoutId;

    return function () {
        //vi debounce se tra ve 1 function de goi, nen return phai la function
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(callback, wait);
    };
}

const debounceLog = debounce(log, 500);

debounceLog();
debounceLog();
debounceLog();
