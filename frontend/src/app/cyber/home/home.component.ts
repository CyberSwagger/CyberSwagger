import { Component, OnInit } from '@angular/core';
import { User, Threat } from '../../domain';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'CyberSwagger | Home';
  constructor() { }

}
