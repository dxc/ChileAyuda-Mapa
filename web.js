'use strict';

var gzippo = require('gzippo');
var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(gzippo.staticGzip('' + __dirname + '/dist'));

var port = Number(process.env.PORT || 5000);

app.listen(port);
