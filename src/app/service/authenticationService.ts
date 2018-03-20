import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
export class User {
  constructor(
    public email: string,
    public password: string,
    public userName: string) { }
}
 
@Injectable()
export class AuthenticationService {
  public users = [];

  constructor(
    private _router: Router){
      this.users = JSON.parse(localStorage.getItem("USERS"))
    }
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
 
  login(user){
    this.users = JSON.parse(localStorage.getItem("USERS"));
    var authenticatedUser = this.users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      this._router.navigate(['countrylist']);
      localStorage.setItem("LOG_IN_USER", JSON.stringify(authenticatedUser.userName))      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 
}