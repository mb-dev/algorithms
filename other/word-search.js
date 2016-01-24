var _ = require('lodash');

// Given a 3x3 grid containing letters and a dictionary, calculate the amount
// of words that are found in the grid, using U,D,L,R direction.
// Given multiple possible results, optimize for returning the most words.

function search(prefix, alphabet) {
  for (var i = 0; i < alphabet; ++i) {
    if (alphabet[i].substring(0, prefix.length-1) == prefix) {
      return alphabet[i];
    }
  }
  return null;
}

function markVisited(used, trail) {
  used = _.clone(used);
  for (var i = 0; i < trail.length; ++i) {
    used[trail[0],trail[1]] = true;
  }
  return used;
}

function word_search(board, alphabet) {
  rec_search = function(position, trail, currentWord, used, wordsFound) {
    if (position[0] < 0 || position[1] < 0 || position[1] >= board.length || position[0] >= board.length) {
      return wordsFound;
    }
    if (!used[position[0], position[1]]) {
      var foundWord = search(currentWord + board[position[0], position[1]]);
      var usedWithoutThisOne = used;
      if (foundWord) {
        trail = trail + [pposition];
        if (foundWord == currentWord) {
          used = markVisited(used, trail);
          wordsFound += 1;
          currentWord = "";
        }
      } else {
        currentWord = "";
        trail = [];
      }
    } else {
      currentWord = "";
      trail = [];
    }

    scores = [];
    scores.push(rec_search([position[0], position[1] - 1], trail, currentWord, used, wordsFound));
    scores.push(rec_search([position[0] + 1, position[1]], trail, currentWord, used, wordsFound));
    scores.push(rec_search([position[0], position[1] + 1], trail, currentWord, used, wordsFound));
    scores.push(rec_search([position[0] - 1, position[1]], trail, currentWord, used, wordsFound));
    scores.push(rec_search([position[0] + 1, position[1]], [], "", usedWithoutThisOne, wordsFound));
    return _.max(scores);
  }
  var start = [0, 0];
  rec_search(start);

}
