var tests = [];

module.exports = {
  addTest: function(func) {
    tests.push({async: false, func: func});
  },
  addAsyncTest: function(func) {
    tests.push({async: true, func: func});
  },
  getTests: function() {
    return tests;
  }
}
