import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEstudent } from '../Model/student';
// import { Observable } from 'rxjs';
//import { IEstudent } from './register/student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private _url: string = "/assets/data/student.json";
  //  listing: FirebaseListObservable<any[]>;
  // private _url: string = "http://localhost:3000/services/aman";

  constructor(private http: HttpClient) { }

  getemployee(user:IEstudent){
    console.log('gggggg',user)

   return this.http.post('http://localhost:3000/services/aman',user);

  }
  getdatafetch(){
    console.log("data fetch")
    return this.http.get('http://localhost:3000/services/fetchdata')
  }
  deleteUser(id:any){
    console.log('###',id);
    console.log("data deleted")
    return this.http.delete('http://localhost:3000/services/delete/'+id)
    
  }
  login(user:IEstudent){
    console.log('###im ggg',user);
    return this.http.post('http://localhost:3000/services/login/',user);
    
  };
  getdata(user:IEstudent){
    console.log('uuuu',user)
    return this.http.post('http://localhost:3000/services/login',user);
  }
  
// }

getListingDetails(id){
  console.log("@@@",id);
  return this.http.get('http://localhost:3000/services/edit/'+id);
  
}
updateAdUnit(user:IEstudent) {
    console.log("aman",user);
  return this.http.post('http://localhost:3000/services/update',user);  
}
}