const convertToCelsius = function(degreeInF) {
  return Math.round(((degreeInF - 32) * (5 / 9)) * 10) / 10;
};

const convertToFahrenheit = function(degreeInC) {
  return Math.round((degreeInC * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
