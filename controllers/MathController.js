'use strict';

var utils = require('../utils/writer.js');
var service = require('../service/MathService');

module.exports.mathPOST = function mathPOST (req, res, next, body, operation) {
  service.mathPOST(body, operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
