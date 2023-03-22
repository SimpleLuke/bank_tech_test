class InputFormatter {
  convertToFloat(num) {
    if (typeof num === "string") {
      return parseFloat(parseFloat(num).toFixed(2));
    } else {
      return parseFloat(num.toFixed(2));
    }
  }
}

module.exports = InputFormatter;
