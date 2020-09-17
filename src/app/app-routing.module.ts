import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { FitnessClassesComponent } from './components/fitness-classes/fitness-classes.component'
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/pages/search/search.component';
import { IconsComponent } from './components/icons/icons.component';
import { RegisterComponent } from './components/register/register.component';
import { InstructorManageClassesComponent } from './components/instructor-manage-classes/instructor-manage-classes.component';
import { InstructorEditProfileComponent } from './components/instructor-edit-profile/instructor-edit-profile.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';


const routes: Routes = [
    // { path: '', component: FitnessClassesComponent },
    { path: '', component: IconsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search-results', component: SearchResultsComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'instructor-manage-classes', component: InstructorManageClassesComponent },
    { path: 'instructor-edit-profile', component: InstructorEditProfileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }