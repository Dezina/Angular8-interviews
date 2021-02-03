import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private obj: UsersService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(data: User) {
    console.log(data);
    this.obj.userLogin(data).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("useremail", res.data.email);
        localStorage.setItem("userphone", res.data.phone);
        localStorage.setItem('err_code', res.error_code);
        console.log('err_code', localStorage.getItem('err_code'));

        console.log('user', data);

        //this.router.navigate(['/home']);
        window.location.replace("http://localhost:4200/home")
      },
      err => {
        console.log(err);
      }
    )
  }

}
