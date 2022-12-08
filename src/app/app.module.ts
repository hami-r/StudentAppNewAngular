import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewStudentComponent } from './view-student/view-student.component';
import { NavbarComponent } from './navbar/navbar.component';

let myRoutes:Routes = [
  {
    path:"",
    component:AddStudentComponent
  },
  {
    path:"view",
    component:ViewStudentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewStudentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
