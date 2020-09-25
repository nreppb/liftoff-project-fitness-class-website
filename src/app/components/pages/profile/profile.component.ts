import { Component, OnInit } from '@angular/core';
// import { UserAuthenticationService, UserDetails } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  // details: UserDetails

  constructor() { }

  ngOnInit(): void {
  //   this.auth.profile().subscribe(
  //     user => {
  //       this.details = user
  //     },
  //     err => {
  //       console.error(err)
  //     }
  //   )
  }

}
