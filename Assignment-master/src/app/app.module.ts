import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    RegisterUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', component:HomeComponent

      },
     
      {
        path:'test/register',component:RegisterUserComponent,
        
      },
      {
        path:'test/list', component:ListUserComponent
      }
    ]
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
