const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members === undefined) return false;

  let string = members.reduce((accum, curr) => {


    if (typeof curr === "string") accum += curr.trim()[0].toUpperCase();
    return accum;
  }, '');

  return string.split("").sort().join('');

}