const repeatString = function(string, numOfTimes) {
    if (numOfTimes < 0) {
        return "ERROR";
    }
    let repeatedString = "";
    for (let i = 0; i < numOfTimes ; i++) {
        repeatedString += string;
    }
    console.log(repeatedString);
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
