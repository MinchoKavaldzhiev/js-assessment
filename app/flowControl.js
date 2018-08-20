flowControlAnswers = {
  /**
   * Returns a string, that is either fizz, buzz, or fizzbuzz depending on a number num.
   * 
   * If the number is divisible by 3, the function should return 'fizz';
   * If the number is divisible by 5, the function should return 'buzz';
   * If the number is divisible by 3 and 5, the function should return 'fizzbuzz';
   * Otherwise the function should return the number.
   * If no number was provided or the value was not a number , return false.
   * 
   * @param {Number} num - A number used to determine the result
   * @returns {String} The string 'fizz', 'buzz', or 'fizzbuzz'
   */
  fizzBuzz: function fizzBuzz(num) {
    if(num && typeof num === "number"){
      if(num % 3 === 0 || num % 5 === 0){
        result = '';
        if(num % 3 === 0) result += "fizz";  
        if(num % 5 === 0) result += "buzz";  
        return result;
      }
      else{
        return num;
      }
    }
    else{
      return false;
    }
  },
};
