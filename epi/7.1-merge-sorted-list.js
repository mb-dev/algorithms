var assert = require('assert');
var testing = require('../testing/testing');
var List = require('../data-structures/list');

// Write a function to merge two sorted linked list
// https://github.com/epibook/epibook.github.io/blob/master/static/solutions/java/src/main/java/com/epi/MergeSortedLists.java

function mergeSortedLists(L, F) {
  var result = new List();
  var li = L.iterator(), fi = F.iterator();
  var l = li.next(), f = fi.next();
  while(l != null || f != null) {
    if (l == null) {
      result.add(f);
      f = fi.next();
    } else if (f == null) {
      result.add(l);
      l = li.next();
    } else if (l < f) {
      result.add(l);
      l = li.next();
    } else {
      result.add(f);
      f = fi.next();
    }
  }
  return result;
}

function test() {
  assert(mergeSortedLists(new List(1, 3, 5), new List(2, 4, 6)).isEqual(new List(1, 2, 3, 4, 5, 6)));
  assert(mergeSortedLists(new List(1, 2, 3, 4), new List(4, 5, 6)).isEqual(new List(1, 2, 3, 4, 4, 5, 6)));
  assert(mergeSortedLists(new List(), new List(2, 4, 6)).isEqual(new List(2, 4, 6)));
  assert(mergeSortedLists(new List(1, 3, 5), new List()).isEqual(new List(1, 3, 5)));
}
testing.addTest(test);
