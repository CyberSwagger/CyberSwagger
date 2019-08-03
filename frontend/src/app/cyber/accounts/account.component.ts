import { Component, OnInit } from '@angular/core';
import { User, Threat } from '../../domain';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  title = 'CyberSwagger | My Account';
  user = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {
      route.params.subscribe(
        item => {
          console.log(item);
        }
      )
  }

}
