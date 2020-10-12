const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = Math.pow(2, disksNumber) - 1,
    sec = Math.floor(turn * 3600 / turnsSpeed);

  return {
    turns: turn,
    seconds: sec,
  }
}