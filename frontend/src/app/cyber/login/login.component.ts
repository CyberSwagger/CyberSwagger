import { Component, OnInit } from '@angular/core';
import { User } from '../../domain';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'CyberSwagger | Login';

  constructor(private http: HttpClient) {
    this.http.get('http://35.164.245.5/test').subscribe(data => {
      var random = data;
      console.log(random);
    });
  }
}
