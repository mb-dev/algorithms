class UndirectedGraph {
  constructor() {
    this.vertices = {};
    this.edges = {};
  }
  addVertex(v) {
    this.vertices[v] = true;
    this.edges[v] = {};
  }
  addEdge(v, w, weight) {
    this.edges[v][w] = weight;
    this.edges[w][v] = weight;
  }
  getNeighbors(v) {
    return Object.keys(this.edges[v]).map(k => ({w: k, weight: this.edges[v][k]}));
  }
}

module.exports = {
  UndirectedGraph
};