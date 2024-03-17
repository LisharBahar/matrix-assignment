'use strict';


/**
 * Perform a mathematical operation on two numbers
 *
 * body Math_body 
 * operation String The mathematical operation to perform (e.g., add, subtract, multiply, divide)
 * returns inline_response_200
 **/
const OPERATIONS = ['add', 'subtract', 'multilpy', 'divide']
exports.mathPOST = function(body,operation) {
  if (isNaN(body.num1) || isNaN(body.num2))
    throw new Error(`Expecting 'num1' & 'num2' as number values`)
  if (OPERATIONS.indexOf(operation) === -1)
    throw new Error(`Operation in invalid, use 1 of these: ${OPERATIONS.join(',')}`)
  return new Promise(function(resolve, reject) {
    console.log(body, operation)
    let result
    switch (operation) {
      case "add": 
        result = body.num1 + body.num2
        break
      case "subtract": 
        result = body.num1 - body.num2
        break
      case "multilpy": 
        result = body.num1 * body.num2
        break
      case "divide": 
        result = body.num1 / body.num2
        break
    }
    return resolve({result})
  });
}

