var express = require('express'),
    fs = require('fs'),
    util = require('util'),
    app = express.createServer(
        express.logger()
    ),
    undefined
    ;

app.use(express.static(__dirname + '/htdocs/'));

app.listen(9041); 

