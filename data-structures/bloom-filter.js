// https://en.wikipedia.org/wiki/Bloom_filter
//
// For hashing use murmur
// Calculate probability: http://hur.st/bloomfilter?n=1000000000&p=0.1
//
// http://billmill.org/bloomfilter-tutorial/
// 1) Choose a ballpark value for n
// 2) Choose a value for m
// 3) Calculate the optimal value of k (m/n)ln(2)
// 4) Calculate the error rate for our chosen values of n, m, and k ((1-e^(-kn/m))^k). If it's unacceptable, return to step 2 and change m; otherwise we're done.
//
// http://ilyasterin.com/blog/2010/02/implementing-bloom-filter-with-a-murmur-hash-function.html
// Less Hashing More Performance: http://www.eecs.harvard.edu/~kirsch/pubs/bbbf/esa06.pdf
// g(i, x) = (h1(x) + i * ih2(x)) mod m
// m is the number of buckets in the bloom filter, h1 and h2 are the two calculated hashes respectively, and i will range from 0 up to k – 1 where k is the number of hashes we want to generate.
//
// Also see:
// http://corte.si/posts/code/bloom-filter-rules-of-thumb/

var assert = require('assert');
var testing = require('../testing/testing');
var murmurhash = require('murmurhash');
var BitSet = require('./bitset');

class BloomFilter {
  constructor(m, n, k) {
    this.hash = new BitSet();
    this.hashCount = k;
    this.numOfBits = m;
    this.errorRate = Math.pow(1-Math.exp(((-k*n)/m)), k);
  }

  add(value) {
    var locations = this.hashLocations(value);
    for (var i = 0; i < locations.length; ++i) {
      this.hash.set(locations[i]);
    }
  }
  exists(value) {
    var locations = this.hashLocations(value);
    for (var i = 0; i < locations.length; ++i) {
      if (this.hash.get(locations[i]) == 0) {
        return false;
      }
    }
    return true;
  }

  hashLocations(value) {
    var hash1 = murmurhash.v3(value);
    var hash2 = murmurhash.v3(value, hash1);
    var locations = [];
    for (var i = 0; i < this.hashCount; ++i) {
      locations.push((hash1 + (hash2 * i)) % this.numOfBits);
    }
    return locations;
  }
}

function test() {
  var bitsPerItem = 8; // one byte per item
  var n = 100;
  var m = n * bitsPerItem;
  var k = Math.floor(bitsPerItem * 0.7);
  var filter = new BloomFilter(m, n, k);
  
  assert.equal(filter.errorRate < 0.03, true, filter.errorRate);
  filter.add("Hello World");
  assert.equal(filter.exists("Hello World"), true);
  assert.equal(filter.exists("Hello"), false);
}
testing.addTest(test);

module.exports = BloomFilter;
