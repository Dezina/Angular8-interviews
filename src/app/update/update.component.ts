import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from '../services/test.service';
import { Test } from '../model/test.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  record: any[] = [];
  todo: any[] = [];
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private obj: TestService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.obj.edit(id).subscribe(
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

  onUpdate(data: Test) {
    console.log(data);
    this.obj.update(data).subscribe((res: any) => {
      console.log(res);
      alert("Updated the second todo list")
      this.router.navigate(['/todo']);
    }, err => {
      console.log(err);
    });
  }

}
