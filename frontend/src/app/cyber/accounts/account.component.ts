import { Component, OnInit } from '@angular/core';
import { User, Threat } from '../../domain';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  title = 'CyberSwagger | My Account';
  constructor() { }

}
