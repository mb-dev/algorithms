var assert = require('assert');
var testing = require('../testing/testing');
var Tree = require('../data-structures/tree');

// You are given 500 files, each containing stock trade information for S&P company.
// Line captures trade: 1232111,AAPL,30,456,12
// ms since start, stock symbol, number of shares, price
// Create single file containing all trades sorted by trade times

// - Solve by keeping a max heap, that consists of
// - key: top ms, value: {filename, seekposition}
// - The top ms can be obtained by reading the first line of each file and putting
//   those into max heap
// - Then fetching top ms from the max heap, read the line again,
//   write to the merged file, read next line and write into the heap.

// No algorithm is present since this similar to other problems and
// the exact conditions are not so easy to test
