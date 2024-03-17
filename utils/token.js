const jwt = require('jsonwebtoken');

exports.generateToken = function (payload) {
    // Define your secret key for signing the token
    const secretKey = 'a1b2c3d4';
    // Define expiration time for the token (e.g., 1 hour)
    const expiresIn = '1h';
    // Generate the JWT token with payload, secret key, and expiration time
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return {token, expiresIn};
}

