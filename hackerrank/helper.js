fs = require('fs');

module.exports = function(filePath) {
  return fs.readFileSync('./hackerrank/' + filePath, "utf8");
};
