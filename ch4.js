var curry = require('lodash').curry;
var _ = require('ramda');

var match = curry(function(what, x) {
  return x.match(what);
});

var replace = curry(function(what, replacement, x) {
  return x.replace(what, replacement);
});

var filter = curry(function(f, xs) {
  return xs.filter(f);
});

var map = curry(function(f, xs) {
  return xs.map(f);
});

match(/\s+/g, "hello world");
// [ ' ' ]

match(/\s+/g)("hello world");
// [ ' ' ]

var hasSpaces = match(/\s+/g);
// function(x) { return x.match(/\s+/g) }

hasSpaces("hello world");
// [ ' ' ]

hasSpaces("spaceless");
// null

filter(hasSpaces, ["tori_spelling", "tori amos"]);
// ["tori amos"]

var findSpaces = filter(hasSpaces);
// function(xs) { return xs.filter(function(x) { return x.match(/\s+/g) }) }

findSpaces(["tori_spelling", "tori amos"]);
// ["tori amos"]

var noVowels = replace(/[aeiou]/ig);
// function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }

var censored = noVowels("*");
// function(x) { return x.replace(/[aeiou]/ig, "*") }

censored("Chocolate Rain");
// 'Ch*c*l*t* R**n'

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = function(str) {
  return split(' ', str);
};

// Solution
var words = split(' ');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = undefined;

// Solution
var sentences = map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = function(xs) {
  return filter(function(x){ return match(/q/i, x);  }, xs);
};

// Solution
var filterQs = filter(match(/q/i));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, 0, xs);
};

// Solution
var max = reduce(_keepHighest, 0);

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = undefined;

// Solution
var slice = _.curry(function(start, end, xs){return xs.slice(start, end);});

// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = undefined;

// Solution
var take = slice(0);

modules.exports = {
    words: words,
    sentences: sentences,
    filterQs: filterQs,
    max: max,
    slice: slice,
    take: take
}

