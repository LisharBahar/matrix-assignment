'use strict';

var path = require('path');
var http = require('http');
var oas3Tools = require('oas3-tools');
var serverPort = 8080;
const { generateToken } = require('./utils/token');

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

const token = generateToken({ 
    userId: `user123`,
    role: 'admin'
});


// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    console.log(`JWT Token created: ${token.token}`);
    console.warn(`JWT Token will expire in: ${token.expiresIn}`)
});

