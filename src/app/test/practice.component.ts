import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router, ActivatedRoute } from '@angular/router';


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

    constructor(private obj: TestService, private router: Router, private route: ActivatedRoute) { }


    ngOnInit() {

        const id = this.route.snapshot.paramMap.get('id');
        console.log(id);

        this.obj.getdata().subscribe(
            (res: any) => {
                this.webdata = res;
                console.log(this.webdata);

                for (let i = 0; i < res.length; i++) {
                    this.todo[i] = res[i].todolist;
                }
                console.log(this.todo)
            },
            (err: any) => {
                console.log(err);
            }
        );

    }

    delete(id) {
        this.id = id;

        this.obj.delete(this.id).subscribe(
            (res: any) => {
                if (res) {
                    alert("Deleted ..");
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

    addTodo(data: Test) {
        this.router.navigate(['/addtodo']);
        this.obj.add(data).subscribe(
            (res: any) => {
                this.router.navigate(['/todo']);
            },
            (err: any) => {
                console.log(err)
            }
        );
    }

    onUpdate(data: Test) {
        this.obj.update(data).subscribe(
            (res: any) => {
                this.router.navigate(['/todo']);
            },
            (err: any) => {
                console.log(err);
            }
        );
    }

}
