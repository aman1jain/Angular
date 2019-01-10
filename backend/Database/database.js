var mysql = require('mysql');
var connection = mysql.createConnection({
    //properties
    host: 'localhost',
    user: 'root',
    password: 'span@12345',
    database: 'student_db'
    });
    connection.connect(function(error){
        console.log("here");
        if(!!error){
            console.log('Error');
        }
        else{
         console.log('connected');
        }
    });

    module.exports=connection;
    