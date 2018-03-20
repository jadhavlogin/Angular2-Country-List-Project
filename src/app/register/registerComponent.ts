import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './registerComponent.html'
})
export class RegisterComponent {
  public model: any = {};
  public passwordMismatchMsg: string = "";
  
  constructor(private _router: Router){
    
  }
  register(){
    if(this.model.password != this.model.confirmPassword){
      this.passwordMismatchMsg = "Password Mismatch...";
    }else{
      this.passwordMismatchMsg = "";
      this._router.navigate(['login']);
      let users = JSON.parse(localStorage.getItem("USERS"));
      users.push({
        email:this.model.email,
        userName: this.model.userName,
        password: this.model.password
      });
      localStorage.removeItem("USERS");
      localStorage.setItem("USERS",JSON.stringify(users));
      alert("Your account created, Please login to system...");
    }
  }
}