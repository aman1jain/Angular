import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  private users =[];
  private nextNum: number;

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSubmit(user){
    this.users.push(user);
    localStorage.setItem('users',JSON.stringify(this.users));
    this.route.navigate(['/test/list'])
    
  }

}
