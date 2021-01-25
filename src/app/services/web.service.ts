import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  url: any = 'http://jsonplaceholder.typicode.com';

  // url: any = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getwebdata() {
    return this.http.get(this.url + '/photos');
  }

  getusers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getuserdata(id: any) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }

}
