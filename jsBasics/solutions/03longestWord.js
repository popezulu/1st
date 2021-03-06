
// Write a function that takes a sentence and returns the longest word.

function longestWord(string) {
  var words = string.split(" ");
  var longestWord = '';

  for (var i = 0; i < words.length; i += 1) {
    var currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}

// Solutions - Do not edit below this line
console.log(); // for spacing

console.log(longestWord("hello"), " <= hello =>", longestWord("hello") === "hello");

console.log(longestWord("love is a beautiful thing"), " <= beautiful =>", longestWord("love is a beautiful thing") === "beautiful");

console.log(longestWord("all your base are belong to us"), " <= belong =>", longestWord("all your base are belong to us") === "belong");

console.log(longestWord("i love lamp"), " <= true => ", longestWord("i love lamp") === "love");

console.log(); // for spacing
