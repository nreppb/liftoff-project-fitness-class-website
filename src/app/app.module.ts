import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';

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
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
