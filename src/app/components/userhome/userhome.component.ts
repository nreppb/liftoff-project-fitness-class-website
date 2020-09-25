import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  username:String='';

  constructor(private _user:UserAuthenticationService, private _router: Router) {

  this._user.user()
  .subscribe(
    data=>this.addName(data),
    error=>this._router.navigate(['/login'])
  )
}

addName(data){
  this.username = data.username;
}


  ngOnInit(): void {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }

}