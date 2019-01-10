import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { IEstudent } from 'src/app/Model/student';

 
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  //for data fetching
  id:string;
  datadisplay:any;
  deletedata:string;
  //for pagination
  public p: number;

  constructor(private data: StudentService ) { }

  ngOnInit() {
    this.data.getdatafetch().subscribe(responseData=>{
      console.log("response of listing data")
        this.datadisplay=responseData;
      console.log(":::::::",this.datadisplay);
      //for pagination
      this.p=1;
    })
  }
  //for delete listing
  removeUser(user:IEstudent){

    this.data.deleteUser(user.studentid).subscribe(responseData=>{
      console.log("delete a record")
      this.datadisplay=this.datadisplay.filter(u=>u!==user);
      console.log("###",this.datadisplay);
    })
   }

}
