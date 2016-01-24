const assert = require('assert');
const testing = require('../testing/testing');

function debounce(func, wait) {
  var called = false;
  var timeoutId = null;
  var args = null;
  var start = null;
  var theStart = new Date();
  function debounced() {
    if (timeoutId == null) {
      start = new Date;
      args = arguments;
      timeoutId = setTimeout(function() {
        func(args);
        start = timeoutId = args = null;
      }, wait);
      return;
    }
    let elapsed = new Date - start;
    if (elapsed >= wait) {
      func(args);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      start = timeoutId = args = null;
    }
  }
  return debounced;
}

function test(done) {
  let limit = 96;
  let called = 0;
  function foo() {
    called += 1;
  }
  let debounced = debounce(foo, 32);
  let start = new Date;
  while(new Date - start < limit) {
    debounced();
  }
  setTimeout(function() {
    assert.equal(called, 3);
    done();
  }, 64);
}
testing.addAsyncTest(test);
