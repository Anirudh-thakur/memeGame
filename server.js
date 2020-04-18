
const express = require("express");

const http = require('http');
const fs = require('fs');
const app = express();

//port
const port = process.env.PORT || 3000;

var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/game1', function(req, res) {
    res.sendFile(path.join(__dirname + '/game1.html'));
});
app.get('/game2', function(req, res) {
    res.sendFile(path.join(__dirname + '/game2.html'));
});


app.listen(port);
 