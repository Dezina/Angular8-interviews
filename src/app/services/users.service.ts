import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: any = 'https://mongodbrestapi01.herokuapp.com';

  id: any;

  constructor(private http: HttpClient) { }

  userSignup(data: User) {
    const body = {
      email: data.username,
      password: data.password,
      phone: data.phone
    };
    return this.http.post(this.url + '/rest/api/users/signup', body);
  }

  userLogin(data: User) {
    const body = {
      email: data.username,
      password: data.password
    };
    return this.http.post(this.url + '/rest/api/users/login', body);
  }


  getpatients() {
    return this.http.get(this.url + '/rest/api/patients');
  }


}
