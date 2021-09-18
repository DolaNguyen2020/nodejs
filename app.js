var express = require('express');
const path = require('path');
var app = express();
//const bodyParser=require('body-parser');
app.use(express.json());//khai bao post
app.use(express.urlencoded());//khai bao post
const apiPath='/api/'
app.use(express.static('client'));
app.use(apiPath+'users',require('./routes/users.route'));

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
