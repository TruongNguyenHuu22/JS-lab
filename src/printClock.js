function printClock() {
    setInterval(() => {
        const now = new Date();
        const hour = convertDigit(now.getHours());
        const minutes = convertDigit(now.getMinutes());
        const seconds = convertDigit(now.getSeconds());
        console.log(hour, ":", minutes, ":", seconds);
    }, 1000);
}

function convertDigit(number) {
    return ("0" + number).slice(-2);
}
printClock();
