const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;
const db=require('../Database/database');
var passport = require('passport');

router.get('/fetchdata',function(req,res){

    console.log("fetch the data")
    db.query('select * from tbaadm.students',function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result)
    });
});

router.post('/aman', function(req,res) {
    var password = req.body.password;
    console.log('#######',password);

    bcrypt.hash(password,saltRounds,function(err,hash){
        //console.log('@@@',hash);
        db.query('insert into tbaadm.students(studentid,firstName,lastName,gender,email,password) values(?,?,?,?,?,?)',
            // [studentid,firstName,lastName,gender,email,hash],function(error,result){
            [req.body.studentid,req.body.firstName,req.body.lastName,req.body.gender,req.body.email,hash],function(error,result){
             
                    if(!!error){
                
                    res.write('false'); 
                    console.log('Error in the query',error);
                } else {
                    res.write('true');
                    console.log('succesfull query',res);
                }
                res.end();
            })
    
        });
    });


    router.delete('/delete/:id',function(req,res){

        console.log('### in the req',req.params.id)
        console.log("######fffgj")
        db.query('Delete from tbaadm.students where studentid=?',[req.params.id],(err,rows,fields)=>{
            text='{"responseData":"Deleted Succefully"}'
            if(!err)
            res.send(JSON.stringify(text));
            else
            console.log(err);
        });
    });

 router.post('/login',function(req,res,next){
    passport.authenticate('local', function(err, user, info) {
        if (err) { return res.status(501).json(err); }
        if (!user) { return res.status(501).json(info);  }
        req.logIn(user, function(err) {
          if (err) { return res.status(501).json(err); }
          return res.status(200).json({Message:'Login success'}); 
        });
      })(req, res, next);
    });

    router.get('/edit/:id',function(req,res){
        console.log('### in the req',req.params.id)
        console.log('####jaerm')
        db.query('select studentid,firstName,lastName,gender,email from tbaadm.students where studentid=?',[req.params.id],function(err,rows){
         
            console.log("row::::::::",rows)
            console.log("err",err);
            res.send(JSON.stringify(rows[0]));
            res.end();
        });
    });

    router.post('/update',function(req,res){
        console.log("I am here...!");
        console.log("##@@",req.body);
        var updatequery= "UPDATE tbaadm.students set firstName=?,lastName=?,gender=?,email=? where studentid=?";
       console.log("update query:::::",updatequery)
        db.query(updatequery,[req.body.firstName,req.body.lastName,req.body.gender,req.body.email,req.body.studentid],(error,result)=>{
                console.log("Query ------ " + updatequery);
                console.log("row:::",result)
                if(error)throw error;
                if(error){
                    res.write('false');
                }else{
                    res.write('true');
                }
            res.end();

        });
    });

    router.post('/login',function(req,res){
        console.log("i am there");
     var email = req.body.email;
     var password = req.body.password;
     db.query('select * from tbaadm.students where email=?',[email],function(error,result,fields){
        if (error) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }else{
          if(results.length >0){
              if(password==results[0].password){
                  res.json({
                      status:true,
                      message:'successfully authenticated'
                  })
              }else{
                  res.json({
                    status:false,
                    message:"Email and password does not match"
                   });
              }
           
          }
          else{
            res.json({
                status:false,    
              message:"Email does not exits"
            });
          }
        }
      });
  
      
     })
   
module.exports=router;

