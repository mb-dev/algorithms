var _ = require('lodash');
var assert = require('assert');
// words are not bigger than width

function distribute_spaces(width, wordLength, wordCount) {
  var spaces = [];
  var amountOfSpaces = (width-wordLength);
  var initialSpace = Math.floor(amountOfSpaces / (wordCount-1));
  var spacesLeft = amountOfSpaces % (wordCount-1);
  for (var i = 0; i < (wordCount - 1); ++i) {
    spaces.push(initialSpace);
  }
  if (spacesLeft > 0) {
    for (var i = spaces.length - 1; i >= 0; --i) {
      spaces[i] += 1;
      spacesLeft -= 1;
      if (spacesLeft == 0) {
        break;
      }
    }
  }
  return spaces;
}

function justify_paragraph(paragraph, width) {
  if (!paragraph || !width) {
    return "";
  }
  var lines = [];
  var words = paragraph.split(' ');
  var currentLineLength = 0;
  var currentLine = 0;
  for (var i = 0; i < words.length; ++i) {
    lines[currentLine] = lines[currentLine] || [];
    if ((currentLineLength + words[i].length) <= width) {
      lines[currentLine].push(words[i]);
      currentLineLength += words[i].length;
    } else {
      i -=1;
      currentLineLength = 0;
      currentLine += 1;
    }
  }

  for (var i = 0; i < lines.length; ++i) {
    var wordLength = _.sum(lines[i].map(function(word) { return word.length; }));
    var spaces = distribute_spaces(width, wordLength, lines[i].length);
    var resultLine = "";
    for (var j=0; j < lines[i].length; ++j) {
      resultLine += lines[i][j];
      resultLine += _.repeat(' ', spaces.shift());
    }
    lines[i] = resultLine;
  }
  return lines.join("\n");
}
