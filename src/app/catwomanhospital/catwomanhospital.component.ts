import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Patient } from '../model/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catwomanhospital',
  templateUrl: './catwomanhospital.component.html',
  styleUrls: ['./catwomanhospital.component.css']
})
export class CatwomanhospitalComponent implements OnInit {

  patients: any[];
  constructor(private obj: UsersService, private router: Router) { }

  ngOnInit() {

    this.obj.getpatients().subscribe((res: any) => {
      console.log(res);
      this.patients = res;
    },
      err => {
        console.log(err);
      });
  }

  onSubmit(data: Patient) {
    console.log(data);
    this.obj.updatepatient(data).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/covid']);
    }, err => {
      console.log(err);
    });
  }

}
