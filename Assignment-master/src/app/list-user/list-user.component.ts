import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 result=[];
  constructor() { }



  ngOnInit() {
    this.result=JSON.parse(localStorage.getItem("users"));
    // console.log(this.result[1]);
    // console.log("type of", typeof(this.result));
    
  }
  removeUser(){
    this.result.pop();
  }

}
