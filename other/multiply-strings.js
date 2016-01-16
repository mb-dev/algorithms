var assert = require('assert');
var testing = require('../testing/testing');

// Multiply two string integers.

function replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
}

function multiply(num1, num2) {
  var result = "";
  var n = -1;
  for (var in1 = num1.length - 1; in1 >= 0; in1--) {
    n += 1;
    var ri = n;
    var carry = 0;
    for (var in2 = num2.length - 1; in2 >= 0; in2--) {
      var resultNum = 0;
      var tempResultIndex = result.length - 1 - ri;
      if (tempResultIndex >= 0) {
        resultNum = parseInt(result[result.length - 1 - ri], 10);
      }
      var mulRes = (parseInt(num1[in1], 10) * parseInt(num2[in2])) + carry + resultNum;
      if (tempResultIndex < 0) {
        result = (mulRes % 10).toString() + result;
      } else {
        result = replaceAt(result, tempResultIndex, (mulRes % 10).toString());
      }
      carry = Math.floor(mulRes / 10);
      ri += 1;
    }
    if (carry > 0) {
      result = carry.toString() + result;
    }
  }
  return result;
}

function test() {
  assert.equal(multiply("2", "2"), "4");
  assert.equal(multiply("18", "18"), "324");
  assert.equal(multiply("19", "19"), "361");
  assert.equal(multiply("4328", "9999"), "43275672");
}
testing.addTest(test);
