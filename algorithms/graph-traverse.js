const assert = require('assert');
const testing = require('../testing/testing');
const {UndirectedGraph} = require('../data-structures/graph');

/**
 * Searches a graph in a DFS manner.
 *
 * @param {UndirectedGraph} g the graph to be searched
 * @param {Object} v the node to start the search from
 * @param {Function} cb will be called for each node. Return true to continue traverse.
 * @returns true if we reached the end of the graph, false if we break in the middle by a false return from cb
  * @api public
 */
function DFS(g, v, cb) {
  const visited = {};
  visit = (g, v, weight) => {
    if (!cb({w: v, weight})) {
      return false;
    }
    visited[v] = true;
    for (let {w, weight} of g.getNeighbors(v)) {
      if (!visited[w]) {
        if (!visit(g, w, weight)){
          return false;
        }
      }
    }
    return true;
  }
  return visit(g, v, 0);
}

module.exports = {
  DFS
};

function test() {
  const g = new UndirectedGraph();
  g.addVertex("0");
  g.addVertex("1");
  g.addVertex("2");
  g.addEdge("0", "1");
  g.addEdge("0", "2");
  let found = false;
  let traverseComplete = DFS(g, 0, v => {found = v.w === "2"; return !found;});
  assert.equal(true, found, "didnt find vertex");
  assert.equal(false, traverseComplete, "didnt stop traverse when entity was found");
  traverseComplete = DFS(g, 0, v => {found = v.w === "3"; return !found;});
  assert.equal(false, found, "vertex was not supposed to be found");
  assert.equal(true, traverseComplete, "stopped traverse too early");
}
testing.addTest(test);
