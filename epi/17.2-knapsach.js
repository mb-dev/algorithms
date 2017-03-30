const assert = require('assert');
const testing = require('../testing/testing');

// Design an algorithm for the knapsack problem that selects a subset 
// of items that has maximum value and weighs at most w ounces. All items have
// integer weights and values.
function knapsackBrute(items, maxWeight) {
  let maxCost = 0;
  let maxPerm = [];
  let times = 0;
  function checkPerm(perm, weight, cost, remainingItems) {
    if (cost > maxCost) {
      maxCost = cost;
      maxPerm = perm;
    }
    while(remainingItems.length > 0) {
      const item = remainingItems.pop();
      if (item.weight + weight > maxWeight) {
        continue;
      }
      checkPerm([].concat(perm).concat([item]), weight + item.weight, cost + item.cost, remainingItems.slice())
    }
  }
  checkPerm([], 0, 0, items);
  return {cost: maxCost, perm: maxPerm.map(p => p.key)};
}

// DP: https://www.youtube.com/watch?v=8LusJS5-AGo
function knapsackDP(items, maxWeight) {
  const matrix = [];
  for (let i = 0; i <= items.length; ++i) {
    matrix[i] = [0];
  }

  for (let j = 0; j <= maxWeight; ++j) {
    matrix[0][j] = 0;
  }

  for (let i = 1; i <= items.length; ++i) {
    for (let j = 1; j <= maxWeight; ++j) {
      if (j < items[i-1].weight) {
        matrix[i][j] = matrix[i-1][j];
      } else {   
        matrix[i][j] = Math.max(items[i-1].cost + matrix[i-1][j-items[i-1].weight], matrix[i-1][j]);
      }
    }
  }  
  return matrix[items.length][maxWeight];
}

function test() {
  const res1 = knapsackBrute([
    {key: 'A', cost: 65, weight: 20},
    {key: 'B', cost: 35, weight: 8},
    {key: 'C', cost: 245, weight: 60},
    {key: 'D', cost: 195, weight: 55},
    {key: 'E', cost: 65, weight: 40},
    {key: 'F', cost: 150, weight: 70},
    {key: 'G', cost: 275, weight: 85},
    {key: 'H', cost: 155, weight: 25},
    {key: 'I', cost: 120, weight: 30},
    {key: 'J', cost: 320, weight: 65},
    {key: 'K', cost: 75, weight: 75},
    {key: 'L', cost: 40, weight: 10},
    {key: 'M', cost: 200, weight: 95},
    {key: 'N', cost: 100, weight: 50},
    {key: 'O', cost: 220, weight: 40},
    {key: 'P', cost: 99, weight: 10},
  ], 130);
  assert.deepEqual(['O', 'J', 'H'], res1.perm);
  assert.equal(695, res1.cost);
  const res2 = knapsackDP([
    {key: 'A', cost: 65, weight: 20},
    {key: 'B', cost: 35, weight: 8},
    {key: 'C', cost: 245, weight: 60},
    {key: 'D', cost: 195, weight: 55},
    {key: 'E', cost: 65, weight: 40},
    {key: 'F', cost: 150, weight: 70},
    {key: 'G', cost: 275, weight: 85},
    {key: 'H', cost: 155, weight: 25},
    {key: 'I', cost: 120, weight: 30},
    {key: 'J', cost: 320, weight: 65},
    {key: 'K', cost: 75, weight: 75},
    {key: 'L', cost: 40, weight: 10},
    {key: 'M', cost: 200, weight: 95},
    {key: 'N', cost: 100, weight: 50},
    {key: 'O', cost: 220, weight: 40},
    {key: 'P', cost: 99, weight: 10},
  ], 130);
  assert.equal(695, res2);
}
testing.addTest(test);
