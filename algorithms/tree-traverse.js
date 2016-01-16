module.exports = {};

module.exports.dfsInOrder = function(tree, nodeKeyFunc) {
    if (tree.root === null) {
        return [];
    }
    if (!nodeKeyFunc) {
      nodeKeyFunc = function(node) { return node.key; }
    }
    var nodes = [];
    var pre = [];
    var order = [];
    var node = tree.root;
    while (nodes.length > 0 || node) {
      if (node) {
        pre.push(nodeKeyFunc(node));
        nodes.push(node);
        node = node.left;
      } else {
        node = nodes.pop();
        order.push(nodeKeyFunc(node));
        node = node.right;
      }
    }
    return order;
}
