const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type ? "direct" : "reverse";
  }
  encrypt(message, key) {
    if (message === "" || key === "") throw new TypeError;
    let result = "";
    let keyIndex = 0;
    const ALPH = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (ALPH.includes(message[i])) {
        let charIndex = (ALPH.indexOf(message[i]) + ALPH.indexOf(key[keyIndex])) % ALPH.length;
        result += ALPH[charIndex];
        if (keyIndex + 1 === key.length) keyIndex = 0;
        else {
          keyIndex++;
        }
      } else {
        result += message[i];
      }


    }
    return this.type === "direct" ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (message === "" || key === "") throw new TypeError;


    let result = "";
    let keyIndex = 0;
    const ALPH = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (ALPH.includes(message[i])) {
        let charIndex = (ALPH.indexOf(message[i]) + ALPH.length - ALPH.indexOf(key[keyIndex])) % ALPH.length;
        result += ALPH[charIndex];
        if (keyIndex + 1 === key.length) keyIndex = 0;
        else {
          keyIndex++;
        }
      } else {
        result += message[i];
      }


    }
    return this.type === "direct" ? result : result.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;