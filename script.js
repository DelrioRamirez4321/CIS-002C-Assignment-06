// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicationUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64
"use strict";

class MultiplicationUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicationUnitFailure("Clunk");
  }
};
while (true) {
  try {
    let result = primitiveMultiply();
    break;
  } catch (error) {
    console.log(MultiplicationUnitFailure);
  }
};
console.log(primitiveMultiply(5,10));


function reliableMultiply(a, b) {
  return a * b ;
};
console.log(reliableMultiply(8,8));
