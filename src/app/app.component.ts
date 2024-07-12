/**
*
* @name: app.component.ts
*
* @description: This is root component file.
*
**/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title= 'Hacker News';
  
  constructor() {}
  
  ngOnInit(): void {
  }

}


