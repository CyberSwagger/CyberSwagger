import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-threats',
  templateUrl: './display-threats.component.html',
  styleUrls: ['./display-threats.component.css']
})
export class DisplayThreatsComponent implements OnInit {

  threats: any = [];

  constructor(private http: HttpClient ) {
    this.http.get("http://35.164.245.5/allthreats").subscribe(
      (response) => {
        this.threats = response;
        console.log(response);
      }
    )
  }

  ngOnInit() {
  }

}
