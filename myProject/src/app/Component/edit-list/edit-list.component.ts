import { Component, OnInit } from '@angular/core';
// import { StudentService } from '../Services/student.service';
import { StudentService } from '../../Services/student.service';
import { Router,ActivatedRoute,Params} from '@angular/router';
// import { PARAMETERS } from '@angular/core/src/util/decorators';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { AlertService } from 'src/app/alert.service';
// import { IEstudent } from '../Model/student';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { ListUserComponent } 'from'


@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  // id:string;
  data : any ={};
  Form: FormGroup;
  successMessage: string = '';
  errorMessage:string = '';
  // loading = false;
  // submitted = false;
  
  
  constructor(private _StudentService: StudentService,private router: Router,private route: ActivatedRoute,private FormBuilder: FormBuilder
    ,private AlertService: AlertService){ 
    this.Form = this.FormBuilder.group({
      studentid:['',Validators.required],
      firstName:['',Validators.required],
      lastName: ['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
  });
}

  ngOnInit() {
    console.log(":::::")
    this.route.params.subscribe(Params=>{  
    this._StudentService.getListingDetails(Params.id).subscribe(result=> {
      console.log(result);
    this.Form.setValue(result);
    console.log(JSON.stringify(this.Form.value));
    });
  });
  }


updateAdUnit(){
  
  this._StudentService.updateAdUnit(this.Form.value).subscribe(data=> {
    // this.AlertService.success('Records updated succesfully',true);
    // console.log("@@",data);
    this.successMessage = "user was updated";
    console.log('uuuuuser');
  },
  error => {
    this.errorMessage = "user could not be updated";
    console.error(error);
   
    // this.AlertService.error(error);
    // this.loading = false;
  });


    };
  }




