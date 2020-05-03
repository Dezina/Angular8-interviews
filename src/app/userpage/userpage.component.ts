import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Patient } from '../model/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  pin: any = '';
  area: any;
  hospital: any;
  ambulance: any;
  batman: any = ['AMB1', 'AMB2'];
  catwoman: any = ['AMC1', 'AMC2'];
  superman: any = ['AMS1', 'AMS2'];
  constructor(private obj: UsersService, private router: Router) { }

  ngOnInit() {

    //check if there is no user logged in
    if (localStorage.getItem('err_code') === null && localStorage.getItem('useremail') === null) {
      this.router.navigate(['/login']);
    }
  }

  shuffle(array: any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array[0];
  }

  onKey(event: any) {
    this.pin = event.target.value;
    if (this.pin === '403200') {
      this.area = 'North';
      this.hospital = 'Batman Hospital';
      this.ambulance = this.shuffle(this.batman);
    }
    else if (this.pin === '403201') {
      this.area = 'East';
      this.hospital = 'Robin Hospital';
      this.ambulance = 'AMR1';
    }
    else if (this.pin === '403202') {
      this.area = 'South';
      this.hospital = 'Catwoman Hospital';
      this.ambulance = this.shuffle(this.catwoman);
    }
    else if (this.pin === '403203') {
      this.area = 'West';
      this.hospital = 'Superman Hospital';
      this.ambulance = this.shuffle(this.superman);
    }
  }

  addPatient(data: Patient) {
    console.log(data);
    this.obj.addPatient(data).subscribe((res: any) => {
      console.log(res);
      alert(res.message);
      this.router.navigate(['/dashboard']);
    },
      err => {
        console.log(err);
      });
  }

}
