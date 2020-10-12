const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {


  calculateDepth(arr) {
    let depth = 1;



    arr.map(elem => {
      if (Array.isArray(elem)) {
        let innerDepth = this.calculateDepth(elem);
        if (++innerDepth > depth) depth = innerDepth;
      }
    });

    return depth;
  }
}