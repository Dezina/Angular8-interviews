import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  
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

    this.obj.getwebdata().subscribe(
      (res: any) => {
        console.log(res);

        for (let i = 0; i < 50; i++) {

          this.options.push(res[i].title);

        }

      });

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  ngOnInit() {
    this.obj.getwebdata().subscribe(
      (res: any) => {

        for (let i = 0; i < res.length - 50; i++) {

          this.webdata.push(res[i]);
          // console.log(this.webdata);
        }
        console.log(this.webdata);
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
    this.obj.getwebdata().subscribe(
      (res: any) => {
        for (let i = 0; i < res.length; i++) {

          if (res[i].title == selectedValue) {

            this.finaldata.push(res[i]);
          }

        }

        console.log(this.finaldata);
      });

    this.status = !this.status;
  }

  onTextChange(value) {
    this.txtValue = value;
    if (this.txtValue == '') {
      location.reload();
    }

  }

}
