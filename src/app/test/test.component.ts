import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  users: any[] = [];
  id: any;

  user: any;

  webdata: any[] = [];

  todo: any[] = [];

  no: any;


  constructor(private obj: TestService, private router: Router) { }


  ngOnInit() {
    this.obj.getdata().subscribe(
      (res: any) => {

        this.webdata = res;

        console.log(this.webdata);

        for (let i = 0; i < res.length; i++) {

          this.todo[i] = res[i].todolist;
          // this.no = i + 1;

        }
        console.log(this.todo);
      },

      (err: any) => {
        console.log(err);
      }
    );

  }


  delete(id) {

    this.id = id;
    console.log(this.id);

    this.obj.delete(this.id).subscribe(
      (res: any) => {
        if (res) {

          alert("Deleted the third todo list")
          this.router.navigate(['/home']);
        }
      },

      (err: any) => {
        console.log(err);
      }

    );
  }

  edit(id) {

    this.id = id;

    this.router.navigate(['/update', { id: this.id }]);

  }

  addTodo() {
    this.router.navigate(['/addtodo']);
  }

}
