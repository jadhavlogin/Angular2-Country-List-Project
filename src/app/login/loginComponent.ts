import { Component } from '@angular/core';
import { AuthenticationService, User } from '../service/authenticationService';
import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './loginComponent.html'
})
export class LoginComponent { 
  public user = new User('', '', '');
  public errorMsg = '';

  constructor(
      private _service:AuthenticationService) {}

  login() {
      if(!this._service.login(this.user)){
          this.errorMsg = 'Failed to login';
      }
  }
}