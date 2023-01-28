function coundDown(seconds) {
    let currentSecond = seconds;
    setIntervalId = setInterval(() => {
        console.log(currentSecond);

        if (currentSecond <= 0) {
            clearInterval(setIntervalId);
        }

        currentSecond--;
    }, 1000);
}
coundDown(10);
