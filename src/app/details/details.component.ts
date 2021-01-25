import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userdata: any[] = [];
  id: any;
  first_name: any;
  last_name: any;
  email: any;
  avatar: any;

  constructor(private route: ActivatedRoute, private router: Router, private obj: WebService) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log(userId);

    this.obj.getuserdata(userId).subscribe(
      (res: any) => {

        this.userdata = res.data;
        console.log(this.userdata);
        this.id = res.data.id;
        this.first_name = res.data.first_name;
        this.last_name = res.data.last_name;
        this.email = res.data.email;
        this.avatar = res.data.avatar;
      },

      (err: any) => {
        console.log(err);
      }
    );
  }

}
