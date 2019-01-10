import { BrowserModule } from '@angular/platform-browser';
//import { ReactiveFormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import 'rxjs/add/observable/throw';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Component/home/home.component';
//import { HomeComponent } from 'myProject/src/app/compo'
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
// import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './Routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './Services/student.service';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HeaderComponent } from './Component/header/header.component';
import { ListUserComponent } from './Component/list-user/list-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AlertComponent } from './Component/alert/alert.component';
import { EditListComponent } from './Component/edit-list/edit-list.component';
import { AlertService } from 'src/app/alert.service';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LocalStorageModule } from 'angular-2-local-storage';
 
// import { AlertComponent } from './alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    ListUserComponent,
    AlertComponent,
    EditListComponent,
    AlertComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  }),
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  
 
  ],
  providers: [StudentService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
