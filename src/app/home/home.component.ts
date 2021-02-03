import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(200)]),
        transition(':leave', [animate(300)]),
      ]
    )]
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) {
  
  }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 550) {
      let element = document.getElementById('navbar2');
      element.classList.add('sticky');
      element.classList.add('navbar-fixed-top');
    } else {
      let element = document.getElementById('navbar2');
      element.classList.remove('sticky');
      element.classList.remove('navbar-fixed-top');
    }
  }

}
