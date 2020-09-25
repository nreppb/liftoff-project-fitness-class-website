import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { FitnessClassesComponent } from './components/fitness-classes/fitness-classes.component';
import { FitnessClassesItemComponent } from './components/fitness-classes-item/fitness-classes-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoginComponent } from './components/login/login.component';
import { AddFitnessClassComponent } from './components/add-fitness-class/add-fitness-class.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/pages/about/about.component';
import { IconsComponent } from './components/icons/icons.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarInstructorComponent } from './components/nav-bar-instructor/nav-bar-instructor.component';
import { InstructorManageClassesComponent } from './components/instructor-manage-classes/instructor-manage-classes.component';
import { InstructorEditProfileComponent } from './components/instructor-edit-profile/instructor-edit-profile.component';
import { FitnessClassDetailsComponent } from './components/fitness-class-details/fitness-class-details.component';
import { ManageFitnessClassesComponent } from './components/manage-fitness-classes/manage-fitness-classes.component';
import { UserAuthenticationService } from './services/user-authentication.service';
// import { AuthGuardService } from './services/auth-guard.service';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { UserhomeComponent } from './components/userhome/userhome.component';

@NgModule({
  declarations: [
    AppComponent,
    FitnessClassesComponent,
    FitnessClassesItemComponent,
    NavBarComponent,
    SearchBoxComponent,
    LoginComponent,
    AddFitnessClassComponent,
    AboutComponent,
    IconsComponent,
    SearchComponent,
    HomeComponent,
    RegisterComponent,
    NavBarInstructorComponent,
    InstructorManageClassesComponent,
    InstructorEditProfileComponent,
    FitnessClassDetailsComponent,
    ManageFitnessClassesComponent,
    ProfileComponent,
    UserhomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [UserAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
