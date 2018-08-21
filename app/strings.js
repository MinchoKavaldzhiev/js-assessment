stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    var returnedStr = '';
    var prevChar = '';
    var dupeCount = 1;
    for(var i = 0; i< str.length; i++){
      var currChar = str.substr(i,1);
      if(prevChar !== currChar){
        prevChar = currChar;
        dupeCount = 1;
      }
      else{
        dupeCount += 1;
        if(dupeCount > amount){
          continue;
        }
      }
      returnedStr += currChar;
    }
    return returnedStr;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    var newStr = '';
    for(var i = str.length; i >= 0; i --){
      newStr += str.substr(i, 1);
    }
    return newStr;
  },
};
