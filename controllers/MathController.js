'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/MathService');

module.exports.mathPOST = function mathPOST (req, res, next, body, operation) {
  Default.mathPOST(body, operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
