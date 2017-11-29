import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavComponent {
  imageUrl: string;
  lockImg: string;

constructor() {
    this.imageUrl = '/assets/images/';
    this.lockImg = 'lock.png';
  }

}
