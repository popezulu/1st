
// Write a function writes all the values between a low number and a high number
// with the following exceptions:
//
// When the number is evenly divisible by three, push 'fizz'
// When the number is evenly divisible by five, push 'buzz'
// When the number is evenly divisible by three and five, push 'fizzbuzz'

function fizzBuzz(low, high) {
  var fizzBuzzArray = [];
  var idx = low;

  while (idx <= high) {

    if (idx % 3 === 0 && idx % 5 === 0) {
      fizzBuzzArray.push('fizzbuzz');
    } else if (idx % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (idx % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push(idx);
    }

    idx += 1;
  }

  return fizzBuzzArray;
}


// Solutions - Do not edit below this line
console.log(); // for spacing
console.log(fizzBuzz(13, 17));
console.log("[ 13, 14, \'fizzbuzz\', 16, 17 ] <= does the above match this?");
console.log(); // for spacing

console.log(fizzBuzz(101, 104));
console.log("[ 101, \'fizz\', 103, 104 ] <= does the above match this?");
console.log(); // for spacing

console.log(fizzBuzz(34360, 34366));
console.log("[ 'buzz', 34361, 'fizz', 34363, 34364, 'fizzbuzz', 34366 ] <= does the above match this?");
console.log(); // for spacing
