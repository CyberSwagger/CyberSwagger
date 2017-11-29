import { Component, OnInit } from '@angular/core';
import { User } from '../../domain';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'CyberSwagger | Login';
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('http://35.164.245.5/test').subscribe(data => {
      var random = data;
      console.log(random);
    });
  }

  login() {
    this.http.post('http://35.164.245.5/login', {
      "username": this.username,
      "password": this.password
    }).subscribe(
      (response) => {
        let user = response[0];
        let user_id = user.user_id;
        (<any>window).user_id = user_id;
        this.router.navigate(['/home/', user_id]);
      },
      (err) => {
        alert("Login Failed")
      });
  }
}
