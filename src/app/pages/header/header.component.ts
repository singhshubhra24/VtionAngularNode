import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.navbar-toggler').on('click', function(evt){
      if ($('.navbar-toggler').hasClass('sidebar-toggler')) {
        $('body').toggleClass('sidebar-hidden');
      }

      if ($('.navbar-toggler').hasClass('aside-menu-toggler')) {
        $('body').toggleClass('aside-menu-hidden');
      }
    });
  }

}
