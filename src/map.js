const cityList = [
    {
        id: 1,
        name: "TP HCM",
    },
    {
        id: 2,
        name: "TP HN",
    },
];

// const x = cityList.filter((x) => {
//     return x.id === 1;
// });
// console.log("🚀 ~ file: map.js:13 ~ x", x.name);

const cityMap = new Map();
cityList.forEach((x) => {
    console.log("🚀 ~ file: map.js:19 ~ cityList.forEach ~ x", x);
    cityMap.set(x.id, x);
});

const x = cityMap.get(1).name;
console.log("🚀 ~ file: map.js:23 ~ x", x);
