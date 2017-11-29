import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  firstName = "";
  lastName = "";
  email = "";
  phoneNumber = "";
  city = "";
  state = "";
  zip = "";
  password = "";
  validated_password = "";
  username = "";
  title = 'CyberSwagger | Login';
  
  constructor(private http: HttpClient, private router: Router) {}

  submitRegistration() {
    if(! (this.password == this.validated_password)) {
      alert("Make sure your passwords match")
      return;
    }
    let postBody = {
      name: this.firstName + " " + this.lastName,
      username: this.username,
      email:     this.email,
      phone: this.phoneNumber,
      city:       this.city,
      state:      this.state,
      zip:        this.zip,
      password:   this.password
    }
    this.http.post('http://35.164.245.5/subscribe', postBody).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
