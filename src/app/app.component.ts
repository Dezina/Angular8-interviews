import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web.service';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Freshdesk';
  status: any;
  dashboard: any = false;

  username: any;
  phone: any;
  txtValue: any;

  // users: any[] = [];

  // user: any;

  constructor(private obj: WebService, private router: Router) {

    this.username = localStorage.getItem('useremail');
    this.phone = localStorage.getItem('userphone');
    this.auth();
  }

  ngOnInit() {

    // this.obj.getusers().subscribe(
    //   (res: any) => {

    //     for (let i = 0; i < res.data.length; i++) {

    //       this.users.push(res.data[i].first_name);

    //     }
    //     console.log(this.users);
    //   },

    //   (err: any) => {
    //     console.log(err);
    //   }
    // );

  }

  // changeIdentificationOptions(value) {

  //   this.user = value;
  //   console.log(this.user);

  //   this.obj.getusers().subscribe(
  //     (res: any) => {
  //       for (let i = 0; i < res.data.length; i++) {

  //         if (res.data[i].first_name == this.user) {

  //           this.router.navigate(['/details', { id: res.data[i].id }]);

  //         }

  //       }

  //     });

  //   this.status = !this.status;
  // }

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

}
