import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../service/apps.service';
import { Apps } from '../../models/apps';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public apps : Apps [];
  public isApps : boolean = true;
  constructor(private appsService : AppsService) { }

  getAllAppsData(){
    this.appsService.getAppsData().subscribe(result =>{
        if(result['statusCode'] == 200){
          this.apps = result['data'];
        }
        else {
            this.isApps = false;
        }  
    })
  }

  ngOnInit() {
      $('body').addClass('sidebar-hidden');
      $('ul.navbar-nav').hide();
      this.getAllAppsData();
  }

}
