
var monk = require('monk');
var pcfVars = require('./pcf_app_env');

var env = process.env.NODE_ENV || 'development';
var serviceName = process.env.DB_SERVICE_NAME || "mongo-" + env;

module.exports = monk(pcfVars.getService(serviceName).credentials.uri);
