'use strict';


/**
 * Perform a mathematical operation on two numbers
 *
 * body Math_body 
 * operation String The mathematical operation to perform (e.g., add, subtract, multiply, divide)
 * returns inline_response_200
 **/
const OPERATIONS = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multilpy: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
}
exports.mathPOST = function(body,operation) {
  if (isNaN(body.num1) || isNaN(body.num2))
    throw new Error(`Expecting 'num1' & 'num2' as number values`)
  const {num1, num2} = body
  if (!OPERATIONS[operation])
    throw new Error(`Operation in invalid, use 1 of these: ${Object.keys(OPERATIONS).join(', ')}`)
  return new Promise(function(resolve, reject) {
    return resolve({result: OPERATIONS[operation](num1, num2)})
  });
}

