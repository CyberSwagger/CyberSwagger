import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

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
  password = ""

  title = 'CyberSwagger | Login';
  constructor(private http: HttpClient) {}

  submitRegistration() {
    let postBody = {
      firstName: this.firstName,
      lastName:  this.lastName,
      email:     this.email,
      phoneNumber: this.phoneNumber,
      city:       this.city,
      state:      this.state,
      zip:        this.zip,
      password:   this.password
    }
    this.http.post('/registration', postBody).subscribe(
      (response) => {

      },
      (error) => {
        console.log(error)
      }
    );
  }

}
