function log() {
    console.log("hello");
}

function throttle(callback, wait) {
    let isThrottling = false;

    return () => {
        if (isThrottling) return;

        isThrottling = true;
        setTimeout(() => {
            callback();
            isThrottling = false;
        }, wait);
    };
}

const throttleLog = throttle(log, 500);
throttleLog();
throttleLog();
throttleLog();
throttleLog();

setTimeout(throttleLog, 600);
setTimeout(throttleLog, 700);
setTimeout(throttleLog, 800);
