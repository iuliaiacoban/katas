// **********************
// 16+18=214
// **********************
const add = (a, b) => {
    let c = a % 10 + b % 10;
    return (a == 0 && b == 0) ? 0 : c + add(parseInt(a / 10), parseInt(b / 10)) * (c > 9 ? 100 : 10);
}
console.log(add(12, 18)); // 214


// **********************
// Testing 1-2-3
// **********************
// Write a function which takes a list of strings and returns each line prepended by the correct number.
const number = array => {
    if (array) {
        return array.map((elem, index) => { return `${index + 1}: ${elem}` });
    }
}
console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"]


// **********************
// Word values
// **********************
/* Given a string "abc" and assuming that each letter in the string has a value equal to its 
position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: 
a = 1, b = 2, c = 3 ....z = 26.*/
const wordValue = words => {
    if (!words || words.length == 0) return [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let groupsOfLetters = words.map(word => word.replace(/\s/g, "").split(""));
    return groupsOfLetters.map((group, index) => (index + 1) * group.reduce((accumulator, letter) => accumulator + alphabet.indexOf(letter) + 1, 0));
}
console.log(wordValue(["abc", "abc abc"])); // [6, 24]


// **********************
// You're a square!
// **********************
const isSquare = n => (Math.sqrt(n) % 1) === 0 ? true : false;
console.log(isSquare(16)); // true
console.log(isSquare(20)); // false


// **********************
// Odd or Even?
// **********************
const oddOrEven = array => {
    if (array.length === 0) return oddOrEven([0]);
    let reducer = array.reduce((acc, curVal) => acc + curVal);
    return reducer % 2 == 0 ? "even" : "odd";
}
console.log(oddOrEven([4])); // even
console.log(oddOrEven([7])); // odd


// **********************
// Simple multiplication
// **********************
const simpleMultiplication = (number) => {
    (number % 2 === 0) ? number = number * 8 : number = number * 9;
    return number;
}

// Century From Year
const century = year => Math.ceil(year / 100);
console.log(century(1705)); // 18