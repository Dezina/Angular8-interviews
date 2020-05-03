import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Covid hospitals';
  status: any = false;
  dashboard: any = false;

  username: any;
  phone: any;
  constructor() {
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

    if (num === 200 && localStorage.getItem('useremail') === 'admin@admin.com') {
      this.dashboard = true;
    }

    if (num === 200) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  logout() {
    localStorage.removeItem('err_code');
    localStorage.removeItem('useremail');
    localStorage.removeItem('userphone');
  }
}
