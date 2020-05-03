import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/users.model';
import { Patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: any = 'https://covidrestapi.herokuapp.com';
  id: any;

  constructor(private http: HttpClient) { }

  userSignup(data: User) {
    const body = {
      email: data.username,
      password: data.password,
      phone: data.phone
    };
    return this.http.post(this.url + '/covid/api/users/signup', body);
  }

  userLogin(data: User) {
    const body = {
      email: data.username,
      password: data.password
    };
    return this.http.post(this.url + '/covid/api/users/login', body);
  }

  addPatient(data: Patient) {
    const body = {
      name: data.name,
      contact: data.contact,
      address: data.address,
      symptom: data.symptom,
      description: data.description,
      pincode: data.pincode,
      area: data.area,
      hospital: data.hospital,
      ambulance: data.ambulance,

    };
    return this.http.post(this.url + '/covid/api/addpatient', body);
  }

  getpatients() {
    return this.http.get(this.url + '/covid/api/patients');
  }

  updatepatient(data: Patient) {
    const body = {
      _id: data._id,
      name: data.name,
      contact: data.contact,
      address: data.address,
      symptom: data.symptom,
      description: data.description,
      pincode: data.pincode,
      area: data.area,
      hospital: data.hospital,
      ambulance: data.ambulance,
      admitted: data.admitted,
    };

    return this.http.patch(this.url + '/covid/api/updatepatient/:_id', body);
  }

}
