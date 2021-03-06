import { Component, OnInit } from '@angular/core';
import { User, Threat } from '../../domain';
import { NavComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'CyberSwagger | Home';

  imageUrl: string;
  hackerLogo: string;
  inverseLogo: string;
  threatpostLogo: string;
  lockImg: string;

  city: string;
  state: string;
  zip: string;
  severity: string;
  attack_type: string;
  description: string;
  attack_date: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.imageUrl = '/assets/images/';
    this.hackerLogo = 'hacker.png';
    this.inverseLogo = 'inverse.png';
    this.threatpostLogo = 'threatpost.png';
    this.lockImg = 'lock.png';
  }

  reportThreat() {
    let threat = {
      city: this.city,
      state : this.state,
      zip: this.zip,
      severity: this.severity,
      type: "Trojan",
      description: this.description
    }

    this.http.post('http://35.164.245.5/threats/addthreats', threat);

  }

}
