const CustomError = require("../extensions/custom-error");
"use strict";
module.exports = function countCats(matrix) {
  let count = 0;
  for (arr of matrix) {
    for (elem of arr) {
      if (elem === "^^")
        count++;
    }
  }
  return count;
}