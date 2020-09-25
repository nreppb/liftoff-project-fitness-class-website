import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // credentials: TokenPayload = {
  //   id: '',
  //   name: '',
  //   description: '',
  //   username: '',
  //   password: ''
  // }
  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });

  constructor(private _user:UserAuthenticationService, private _router: Router) { }



  // login () {
  //   this.auth.login(this.credentials).subscribe(
  //     () => {
  //       this.router.navigateByUrl('/profile')
  //     },
  //     err => {
  //       console.error(err)
  //     }
  //   )
  // }

  ngOnInit(): void {
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/user']);} ,
      error=>console.error(error)
    )
  }

}
