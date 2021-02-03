import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web.service';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `.ball {
      position: relative;
      background-color: brown;
      border-radius: 50%;
      top: 200px;
      height: 30px;
      width: 30px;
    }`
  ],

  animations: [
    trigger('animateArc', [
      state('true', style({
        left: '400px',
        top: '200px'
      })),
      state('false', style({
        left: '0',
        top: '200px'
      })),
      transition('false => true', animate('1000ms linear', keyframes([
        style({ left: '0', top: '200px', offset: 0 }),
        style({ left: '200px', top: '100px', offset: 0.50 }),
        style({ left: '400px', top: '200px', offset: 1 })
      ]))),
      transition('true => false', animate('1000ms linear', keyframes([
        style({ left: '400px', top: '200px', offset: 0 }),
        style({ left: '200px', top: '100px', offset: 0.50 }),
        style({ left: '0', top: '200px', offset: 1 })
      ])))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'ServiceDesk';
  status: any;
  dashboard: any = false;

  username: any;
  phone: any;
  txtValue: any;
  arc: string = 'false';

  constructor(private obj: WebService, private router: Router) {

    this.username = localStorage.getItem('useremail');
    this.phone = localStorage.getItem('userphone');
    this.auth();
  }

  ngOnInit() {

  }

  auth() {
    console.log('app', localStorage.getItem('err_code'));
    console.log('app', localStorage.getItem('useremail'));
    console.log('app', localStorage.getItem('userphone'));

    const num = Number(localStorage.getItem('err_code'));

    if (num === 200) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  // LOGOUT
  logout() {
    localStorage.removeItem('err_code');
    localStorage.removeItem('useremail');
    localStorage.removeItem('userphone');
  }

  public logClick(value: string): void {

    console.group("Clicked Anchor");
    console.log(value);
    this.txtValue = value;

  }

  // ANIMATION
  toggleBounce() {
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }

}
