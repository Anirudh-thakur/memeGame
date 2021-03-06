
const express = require("express");

const http = require('http');
const fs = require('fs');
const app = express();

//port
const port = process.env.PORT || 3000;

var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname + '/game.html'));
});
app.get('/game2', function(req, res) {
    res.sendFile(path.join(__dirname + '/game2.html'));
});
app.get('/PrivacyPolicies', function(req, res) {
    res.sendFile(path.join(__dirname + '/Privacy Policy Second sample.html'));
});
app.get('/TermsandConditions', function(req, res) {
    res.sendFile(path.join(__dirname + '/Terms and Conditions second sample.html'));
});

app.listen(port);
 