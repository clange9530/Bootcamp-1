var express = require('express');
var app = express();
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('listings.JSON', 'utf8'));


app.listen(3000);