const reverseString = function(stringToReverse) {
let reversedString = "";
let charArray = stringToReverse.split("");
for (let i = charArray.length - 1; i >= 0; i--) {
    reversedString += charArray[i];
}
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
