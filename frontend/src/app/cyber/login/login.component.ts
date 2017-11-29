import { Component, OnInit } from '@angular/core';
import { User } from '../../domain';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'CyberSwagger | Login';
  email = '';
  password = '';

  constructor(private http: HttpClient) {
    this.http.get('http://35.164.245.5/test').subscribe(data => {
      var random = data;
      console.log(random);
    });
  }

  login() {
    this.http.post('http://35.164.245.5/login', {
      "email": this.email,
      "password": this.password
    }).subscribe(
      (response) => {

    },
      (err) => {
        console.log(err)
      });
  }
}
