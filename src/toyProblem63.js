/* leetcode Excel Sheet Column Title

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet */

// input: any positive integer
// output: that integers corresponding letter as it appears in an Excel sheet (A -> 1, B -> 2, etc)
// constraints: 1 <= columnNumber <= 2^31 - 1
// edge cases: if input is empty, return null
const convertToTitle = n => {
  let charMap = {
    0: "Z",
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y"
};


let title = "";

if (n <= 26) {
    return charMap[n%26]
}

while (n > 0) {
    let r = n%26;

    n = Math.floor(n/26);

    if (r == 0) {
        r = 0;
        n = n-1;
    }
    title = charMap[r] + title;
}

return title;
};

console.log(convertToTitle(1)) // A

console.log(convertToTitle(28)) // AB

console.log(convertToTitle(701)) // ZY

console.log(convertToTitle(2147483647)) // FXSHRXW