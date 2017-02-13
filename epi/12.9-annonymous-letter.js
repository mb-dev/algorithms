var assert = require('assert');
var testing = require('../testing/testing');

// Intesting solution that removes frequency from first dictionary as time goes on:
// https://github.com/adnanaziz/epicode/blob/master/java/src/main/java/com/epi/AnonymousLetter.java

function isLetterPartOf(L, M) {
  // remove spaces
  const lDict = {}, mDict = {};

  for(var i = 0; i < L.length; ++i) {
    lDict[L[i]] = lDict[L[i]] ? lDict[L[i]] : 0;
    lDict[L[i]]++;
  }

  for(var i = 0; i < M.length; ++i) {
    mDict[M[i]] = mDict[M[i]] ? mDict[M[i]] : 0;
    mDict[M[i]]++;
  }

  if(Object.keys(lDict).length > Object.keys(mDict).length) {
    return false;
  }

  for(const letter of Object.keys(lDict)) {
    if (!mDict[letter]) {
      return false;
    }
    if (lDict[letter] > mDict[letter]) {
      return false;
    }
  }

  return true;
}

function test() {
  assert.equal(true, isLetterPartOf("Hello World", "World Hello Hello"));
  assert.equal(false, isLetterPartOf("Hello World", "World Trade Center"));
}
testing.addTest(test);
