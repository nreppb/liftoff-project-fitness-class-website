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
import { FitnessClassDetailsComponent } from './components/fitness-class-details/fitness-class-details.component';
import { ManageFitnessClassesComponent } from './components/manage-fitness-classes/manage-fitness-classes.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
// import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
    // { path: '', component: FitnessClassesComponent },
    { path: '', component: IconsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'instructor-manage-classes', component: InstructorManageClassesComponent },
    { path: 'instructor-edit-profile', component: InstructorEditProfileComponent },
    { path: 'about/:id', component: FitnessClassDetailsComponent },
    { path: 'manage', component: ManageFitnessClassesComponent },
    { path: 'user', component: UserhomeComponent },
    // { path: '', redirectTo:'login', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }