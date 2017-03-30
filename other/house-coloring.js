var assert = require('assert');
var testing = require('../testing/testing');

// There are a row of houses. Each house can be painted with three colors: red, blue and green. 
// The cost of painting each house with a certain color is different. 
// You have to paint all the houses such that no two adjacent houses have the same color.
// You have to paint the houses with minimum cost. How would you do it?
//
// https://www.careercup.com/question?id=9941005
// http://stackoverflow.com/questions/15630743/is-house-coloring-with-three-colors-np


function paintHouses(costs) {
  const table = [
    [], // R
    [], // G
    [], // B
  ];

  for (let i = 0; i < costs.length; ++i) {
    table[i][0] = costs[i][0];
  }
  const numHouses = costs[0].length;

  for (let i = 0; i < costs.length; ++i) { // iterate over colors
    for (let j = 1; j < costs[i].length; ++j) { // iterate over houses
      let options = [];
      for (let k = 0; k < costs.length; ++k) { // iterate over colors on previous column
        if (k === i) { // if same color
          continue;
        }
        options.push(table[k][j-1] + costs[i][j]); // cost for previous house, plus new color
      }
      table[i][j] = Math.min(...options); // pick min of options
    }
  }
  return Math.min(
    table[0][numHouses-1],
    table[1][numHouses-1],
    table[2][numHouses-1]
  );
}

function test() {
  assert.equal(26, paintHouses([
    [11, 14],
    [12, 15],
    [13, 16],
  ]));
}
testing.addTest(test);

