import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { Router } from '@angular/router';

import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-userpage', 
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  users: any[] = [];

  user: any;

  arr: any[] = [];

  webdata: any[] = [];

  options: any[] = [];

  myControl = new FormControl();

  finaldata: any[] = [];

  status: boolean = true;

  txtValue: any;

  filteredOptions: Observable<string[]>;


  constructor(private obj: WebService, private router: Router) { }

  private _filter(value: string): any[] {

    const filterValue = value.toLowerCase();

    this.obj.getusers().subscribe(
      (res: any) => {
        console.log(res.data);
        //this.options = res.data.first_name;
        for (let i = 0; i < res.data.length; i++) {
          console.log(res.data[i].first_name);
          this.options.push(res.data[i].first_name);

        }

      });

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  ngOnInit() {
    this.obj.getusers().subscribe(
      (res: any) => {

        for (let i = 0; i < res.data.length; i++) {

          this.webdata.push(res.data[i]);

          this.users.push(res.data[i].first_name);
          // console.log(this.webdata);
        }
        console.log(this.users);
      },

      (err: any) => {
        console.log(err);
      }
    );

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }


  selectedOption(event) {
    const selectedValue = event.option.value;

    this.obj.getusers().subscribe(
      (res: any) => {
        for (let i = 0; i < res.data.length; i++) {

          if (res.data[i].first_name == selectedValue) {

            //this.finaldata.push(res.data[i]);
            this.router.navigate(['/details', { id: res.data[i].id }]);

          }

        }

        console.log(this.finaldata);
      });

    this.status = !this.status;
  }

  selectedUser(value) {

    this.user = value;
    console.log(this.user);

    this.obj.getusers().subscribe(
      (res: any) => {
        for (let i = 0; i < res.data.length; i++) {

          if (res.data[i].first_name == this.user) {

            this.router.navigate(['/details', { id: res.data[i].id }]);

          }

        }

      });

    this.status = !this.status;
  }

  onTextChange(value) {
    this.txtValue = value;
    console.log(this.txtValue);

    if (this.txtValue == '') {
      location.reload();
    }

  }

}
