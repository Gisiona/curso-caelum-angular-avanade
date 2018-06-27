/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
*/

import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  // template: `<app-listagem></app-listagem>`,
  //templateUrl: './app.component.html',
  // styles ou styleUrls
  styles: []
})


export class AppComponent { }
