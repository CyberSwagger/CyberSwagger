import { Component, OnInit } from '@angular/core';
import { User, Threat } from '../../domain';
import { NavComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';

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

constructor() {
    this.imageUrl = '/assets/images/';
    this.hackerLogo = 'hacker.png';
    this.inverseLogo = 'inverse.png';
    this.threatpostLogo = 'threatpost.png';
    this.lockImg = 'lock.png';
  }

}
