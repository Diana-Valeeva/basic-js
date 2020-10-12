const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;
  let newArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1 && arr[i] === "--discard-next" || i === arr.length - 1 && arr[i] === "--double-next" || i === 0 & arr[i] === "--double-prev") {
      newArr[i] = "del";
    } else if (arr[i] === "--discard-next") {
      newArr[i + 1] = "del";
      newArr[i] = "del";
    } else if (arr[i] === "--discard-prev") {
      newArr[i - 1] = "del";
      newArr[i] = "del";
    } else if (arr[i] === "--double-next") newArr[i] = newArr[i + 1];
    else if (arr[i] === "--double-prev") newArr[i] = newArr[i - 1];
  }
  return newArr.filter(elem => elem != "del");

};