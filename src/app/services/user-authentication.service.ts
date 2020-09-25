import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

// export interface UserDetails {
//   id: string
//   name: string
//   password: string
//   description: string
//   username: string
//   exp: number
//   iat: number
// }

// interface TokenResponse {
//   token: string
// }

// export interface TokenPayload {
//   id: string
//   name: string
//   password: string
//   description: string
//   username: string
// }

@Injectable()
export class UserAuthenticationService {
//   private token: string

  constructor(private _http: HttpClient) { }

  register(body:any){
    return this._http.post('http://localhost:5000/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any){
    return this._http.post('http://localhost:5000/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  user(){
    return this._http.get('http://localhost:5000/users/',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  logout(){
    return this._http.get('http://localhost:5000/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

//   private saveToken(token: string): void {
//     localStorage.setItem('userToken', token)
//     this.token = token
//   }

//   private getToken (): string {
//     if (!this.token) {
//       this.token = localStorage.getItem('userToken')
//     }
//     return this.token
//   }

//   public getUserDetails (): UserDetails {
//     const token = this.getToken()
//     let payload
//     if (token) {
//       payload = token.split('.')[1]
//       payload = window.atob(payload)
//     } else {
//       return null
//     }
//   }

//   public isLoggedIn (): boolean {
//     const user = this.getUserDetails()
//     if (user) {
//       return user.exp > Date.now() / 1000
//     } else {
//       return false
//     }
//   }

//   public register (user: TokenPayload): Observable<any> {
//     const base = this.http.post(`http://localhost:5000/users/register`, user)

//     const request = base.pipe(
//       map((data: TokenResponse) => {
//         if (data.token) {
//           this.saveToken(data.token)
//         }
//         return data
//       })
//     )

//     return request
//   }

//   public login (user: TokenPayload): Observable<any> {
//     const base = this.http.post(`http://localhost:5000/users/login`, user)

//     const request = base.pipe(
//       map((data:TokenResponse) => {
//         if (data.token) {
//           this.saveToken(data.token)
//         }
//         return data
//       })
//     )

//     return request

//   }

//   public profile (): Observable<any> {
//     return this.http.get(`/users/profile`, {
//       headers: { Authorization: `${this.getToken()}`}
//     })
//   }

//   public logout (): void {
//     this.token = ''
//     window.localStorage.removeItem('userToken')
//     this.router.navigateByUrl('/')
//   }

}
