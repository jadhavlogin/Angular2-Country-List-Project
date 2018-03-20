import { Component } from '@angular/core';
import { HttpService } from './service/httpService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private httpService: HttpService){
    let users = JSON.parse(localStorage.getItem("USERS"))
    if(users == null){
      users = [];
      users.push({
        email:'admin@admin.com',
        password: 'admin',
        userName:'ADMIN'
      });
      localStorage.setItem("USERS", JSON.stringify(users))
    }
    this.httpService.get_countries();
  }
}
