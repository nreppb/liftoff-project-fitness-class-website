import { Component, OnInit } from '@angular/core';
import {  UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)
  })

  // credentials: TokenPayload = {
  //   id: '',
  //   name: '',
  //   description: '',
  //   username: '',
  //   password: ''
  // }
  
  constructor(private _userService: UserAuthenticationService, private _router: Router) { }

  // register () {
  //   this.auth.register(this.credentials).subscribe(
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

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=>console.error(error)
    )
    console.log(JSON.stringify(this.registerForm.value));
  }

}
