const arr = [1,2,3,4,5];
const obj = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5
}

for (index in arr) {
    console.log("IN-Arr", index);
}

for (index in obj) {
    console.log("IN-Obj", index);
}

for (index of arr) {
    console.log("OF-Arr", index);
}
