var express = require('express');
var app = express();

app.get('/user', function (req, res) {
    res.send('Hello World!');
});

app.listen(3004, function () {
    console.log('Example app listening on port 3004!');
});
