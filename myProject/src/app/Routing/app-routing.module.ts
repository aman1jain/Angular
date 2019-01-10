import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { HomeComponent } from '../Component/home/home.component';
//import { HomeComponent } from 'myProject/src/app/compo'
import { LoginComponent } from '../Component/login/login.component';
import { RegisterComponent } from '../Component/register/register.component';
// import { NotFoundComponent } from '../Component/not-found/not-found.component';
import { ListUserComponent } from '../Component/list-user/list-user.component';
import { EditListComponent } from '../Component/edit-list/edit-list.component';
import { AlertComponent } from '../Component/alert/alert.component';
import { DashboardComponent } from '../Component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent

  },
 
  {
    path:'test/login',component:LoginComponent
    
  },
  {
    path:'test/Dashboard', component:DashboardComponent
  },
  {
    path:'test/register', component:RegisterComponent
  },
  {
    path:'test/list-user', component:ListUserComponent
  },
  {
    path:'test/edit-list/:id', component:EditListComponent
  },
//  {
    // path:'', component:AlertComponent
  // },
  // {
  //   path:'**', component:NotFoundComponent
  // },
 
]

@NgModule({
  
    imports: [ RouterModule.forRoot(routes) ],
   exports: [RouterModule],
    //CommonModule
  
  declarations: []
})
export class AppRoutingModule { }
