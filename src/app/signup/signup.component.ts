import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private obj: UsersService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(data: User) {
    console.log(data);
    this.obj.userSignup(data).subscribe(
      (res: any) => {
        console.log(res);
        alert("Created new sign in, now you can login...");
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
