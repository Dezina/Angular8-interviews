import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../model/test.model';

@Injectable({
    providedIn: 'root'
})
export class TestService {


    constructor(private http: HttpClient) { }

    getdata() {
        return this.http.get('http://localhost:5000/todo');
    }

    add(data: Test) {
        const body = {
            author: data.author,
            todolist: data.todolist
        };
        return this.http.post('http://localhost:5000/todo/add', body);
    }

    delete(id: any) {
        return this.http.delete('http://localhost:5000/todo/delete/' + id);
    }

    update(data: Test) {
        const body = {
            id: data.id,
            author: data.author,
            todolist: data.todolist
        };
        return this.http.patch('http://localhost:5000/todo/update', body);
    }

}
