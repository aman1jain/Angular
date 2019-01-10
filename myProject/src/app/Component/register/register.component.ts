import { Component, OnInit } from '@angular/core';
//import { FormGroup,FormControl, Validators} from '@angular/forms';
import{ FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { StudentService } from './student';
//import { StudentService } from '../student.service';
import { StudentService } from '../../Services/student.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public student =[];
   //form = new FormGroup({
     //firstname: new FormControl('',Validators.required),
     registerForm = new FormGroup({
       studentid: new FormControl('',Validators.required),
       firstName: new FormControl('',Validators.required),
       lastName: new FormControl('',Validators.required),
       gender: new FormControl('',Validators.required),
       email: new FormControl('',[Validators.required,Validators.email]),
       password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  
  constructor(private _StudentService: StudentService,private routes: Router) { }

  ngOnInit() {
        // this._StudentService.getemployee()
        // .subscribe(data => this.student = data); 

  } 
  onSubmit(data) {

    console.log("Aman",data)

    this._StudentService.getemployee(this.registerForm.value).subscribe(data=>{});
    console.log("resule",data)
    this.routes.navigate(['/test/login']);
    }
  
   // console.log(JSON.stringify(this.registerForm.value));
  }



