var express = require('express');
var  bodyparser = require('body-parser');
var mysql = require('mysql');
// var cors = require('cors');
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
// app.use(cors());


//create connect method 
var connection = mysql.createConnection({
//properties
host: 'localhost',
user: 'root',
password: 'span@12345',
database: 'new'
});
connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }
    else{
     console.log('connected');
    }
});

app.get('/fetchdata',function(req,res){
    console.log("fetch the data")
    connection.query('select * from students',function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result)
    });
});

app.listen(3000);