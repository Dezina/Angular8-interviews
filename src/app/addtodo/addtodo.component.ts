import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
import { Test } from '../model/test.model';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  record: any[] = [];
  todo: any[] = [];
  id: any = "5fe8f17819d49446a0a778be";

  constructor(private router: Router, private obj: TestService) { }

  ngOnInit() {

    this.obj.edit(this.id).subscribe(
      (res: any) => {

        this.record = res;
        console.log(res.length);

        for (let i = 0; i < res.length; i++) {

          this.todo = res[i].todolist;
          // console.log(this.todo);
        }
        console.log(this.todo);
      },

      (err: any) => {
        console.log(err);
      }
    );

  }

  onSubmit(data: Test) {
    console.log(data);
    this.obj.add(data).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/todo']);
    }, err => {
      console.log(err);
    });
  }

}
