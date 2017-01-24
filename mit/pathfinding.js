const assert = require('assert');
const testing = require('../testing/testing');
const _ = require('lodash');

// return the path used to reach the destination
function get_path(source, min_weight, dest) {
  const path = [];
  let current = dest;
  let total_weight = 0;
  // if we didn't find any path, the source for current will be null
  if (!source[current]) {
    return null;
  }
  // otherwise, there's some path, continue until we reach the end
  while(current != null) {
    path.unshift(current);
    total_weight += min_weight[current];
    current = source[current];
  }
  return {path, weight: total_weight};
}

function relax(input, u, v, min_weight, source) {
  if (min_weight[v] > min_weight[u] + input[u][v]) {
    min_weight[v] = min_weight[u] + input[u][v];
    source[v] = u;
  }
}

function extract_min(vertices, min_weight) {
  const min = _.minBy(vertices, v => min_weight[v]);
  vertices.splice(vertices.indexOf(min), 1);
  return min;
}

// find the shortest paths
function dijkstra(input, src, dest) {
  const source = [];
  const min_weight = [];
  const remaining_vertices = [];
  // initialize the array, min weight is infinity
  for (let i = 0; i < input.length; ++i) {
    source[i] = null;
    min_weight[i] = 10000;
    remaining_vertices.push(i);
  }
  min_weight[src] = 0;
  while(remaining_vertices.length > 0) {
    // find the min vertex. It will start with src, since it has the min-weight of 0
    const u = extract_min(remaining_vertices, min_weight);
    // relax all edges coming out of the min
    _.forEach(input[u], (weight, v) => {
      relax(input, u, v, min_weight, source);
    });
  }
  return get_path(source, min_weight, dest);
}

function test() {
  assert.deepEqual({path: [0, 1, 2], weight: 3}, dijkstra([
    {1: 1}, // node 0
    {2: 1}, // node 1
    {},
  ], 0, 2));
  assert.deepEqual(null, dijkstra([
    {1: 1}, // node 0
    {2: 1}, // node 1
    {},
  ], 2, 0));
}
testing.addTest(test);

