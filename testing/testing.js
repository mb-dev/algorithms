var tests = [];

module.exports = {
  addTest: function(func) {
    tests.push(func);
  },
  getTests: function() {
    return tests;
  }
}
