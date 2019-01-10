import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from '../../Services/student.service';
// import {  AuthenticationService } from 'src/app/Services/Authentication.service';
// import { AuthenticationService } from '../..Services/Authentication.service';
import { RouterModule, Route } from '@angular/router';
import { Router,Params } from '@angular/router';
import { IEstudent } from 'src/app/Model/student';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl : string;
  loginForm:FormGroup;

  // emaildata="admin";
  // passworddata="12";

  constructor(private fb:FormBuilder,private _StudentService: StudentService,private routes: Router,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.oncreate()
    }


oncreate(){
  this.loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

}

  onSubmit(){
    console.log("Aman")
    // console.log(this.loginForm.value);
// 
    // let email=this.loginForm['controls'].email.value;
    // let password=this.loginForm['controls'].password.value;
    // console.log(email);
// 
    // if(email===this.emaildata && password=== this.passworddata){
    // this.routes.navigate(['/test/dashboard']);
    // this.localStorageService.set('user',email)
    // }
// 
// 
    // else{
      // alert("password email does not matched")
    // }

    }
   
}

    // console.log("Aman",data)

    // this._StudentService.getdata(this.loginForm.value).subscribe(data=>{});
    // console.log("result",data)
    // this.routes.navigate(['/test/dashboard']);
    // }
        // console.log(JSON.stringify(this.loginForm.value));
   
    // if(!this.loginForm.valid){
    //   console.log('Invalid');
    //   return;