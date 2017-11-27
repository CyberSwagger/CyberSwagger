import { Component, OnInit } from '@angular/core';
import { User } from '../../domain';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'CyberSwagger | Home';
  constructor() { }

}
