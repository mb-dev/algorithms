const assert = require('assert');
const testing = require('../testing/testing');
const {DFS} = require('../algorithms/graph-traverse');
const {UndirectedGraph} = require('../data-structures/graph');

function v(i, j) {
  return `${i},${j}`;
}

// Given a 2D array of black and white entries representing a maze 
// with designated entrance and exit points, find a path from the
// entrance to the exit if one exists
function mazePathExists(maze, entrance, exit) {
  const graph = new UndirectedGraph();
  for(let i = 0; i < maze.length; ++i) {
    for (let j = 0; j < maze[i].length; ++j) {
      if (maze[i][j] == 0) {
        continue;
      }
      graph.addVertex(v(i, j))
    }
  }

  for(let i = 0; i < maze.length; ++i) {
    for (let j = 0; j < maze[i].length; ++j) {
      if (maze[i][j] == 0) {
        continue;
      }
      // above
      if (i > 0 && j > 0 && maze[i-1][j] === 1) {
        graph.addEdge(v(i, j), v(i-1, j));
      }
      // bottom
      if (i < (maze.length-1) && maze[i+1][j] === 1) {
        graph.addEdge(v(i, j), v(i+1, j));
      }
      // left
      if (j > 0 && maze[i][j-1] === 1) {
        graph.addEdge(v(i, j), v(i, j-1));
      }
      // right
      if (j < (maze[i].length-1) && maze[i][j+1] === 1) {
        graph.addEdge(v(i, j), v(i, j+1));
      }
    }
  }
  let foundExit = false;
  DFS(graph, entrance, v => {foundExit = v.w === exit; return !foundExit;});
  return foundExit;
}

function test() {
  // simple maze:
  // *  *  Ex
  // *  X  *
  // En X  *
  assert.equal(true, mazePathExists([
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ], v(2, 0), v(0, 2)));
  // no path:
  // *  X  Ex
  // *  X  *
  // En X  *
  assert.equal(false, mazePathExists([
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ], v(2, 0), v(0, 2)));
}
testing.addTest(test);
