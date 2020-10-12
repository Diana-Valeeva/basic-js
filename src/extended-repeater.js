const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = "",
  additionRepeatTimes = 1,
  additionSeparator = "|"
}) {

  let resultStr = ""
  let additionStr = ""
  addition !== null ? addition = addition.toString() : addition = null;
  while (additionRepeatTimes > 1) {
    additionStr += addition + additionSeparator.toString();
    additionRepeatTimes--;
  }
  str += additionStr + addition;
  while (repeatTimes > 1) {
    resultStr += str + separator.toString();
    repeatTimes--;
  }


  return resultStr + str;
};