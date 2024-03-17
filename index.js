'use strict';

var path = require('path');
var http = require('http');
var oas3Tools = require('oas3-tools');
var serverPort = 8080;
const jwt = require('jsonwebtoken');

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

function generateToken(payload) {
    // Define your secret key for signing the token
    const secretKey = 'a1b2c3d4';
    // Define expiration time for the token (e.g., 1 hour)
    const expiresIn = '1h';
    // Generate the JWT token with payload, secret key, and expiration time
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
}
const payload = { 
    userId: `user123`,
    role: 'admin'
};
const token = generateToken(payload);

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    console.log(`JWT Token created: ${token}`);
});

