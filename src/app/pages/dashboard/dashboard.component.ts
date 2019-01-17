import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  installdata : any;
  activedata : any;
  engagementData : any;
  churnData : any;
  eventdata : any;
  
  constructor() {
  }

  installs (){
    this.installdata = {
      count : 1000,
      chartProperty : {
        colors : [{
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)'
        }],
        data : [
          {data:[1, 18, 9, 17, 34, 22, 11]}
        ],
        options : {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            fill : false,
            scales: {
                xAxes: [{
                  gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                  },
                  ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                  }
        
                }],
                yAxes: [{
                  display: false
                }],
            },
            elements: {
              line: {
                borderWidth: 1,
                fill: false
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            }
        },
        labels : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        chartType : 'line',
        legend : false
      }
    }
  }

  active (){
    this.activedata = {
      count : 1000,
      chartProperty : {
        colors : [{
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)'
        }],
        data : [
          {data:[1, 18, 9, 17, 34, 22, 11]}
        ],
        options : {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            fill : false,
            scales: {
                xAxes: [{
                  gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                  },
                  ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                  }
        
                }],
                yAxes: [{
                  display: false
                }],
            },
            elements: {
              line: {
                borderWidth: 1,
                fill: false
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            }
        },
        labels : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        chartType : 'line',
        legend : false
      }
    }
  }

  engagements (){
    this.engagementData = {
      count : 10000,
      chartProperty : {
        colors : [{
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)'
        }],
        data : [
          {data:[1, 18, 9, 17, 34, 22, 11]}
        ],
        options : {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            fill : false,
            scales: {
                xAxes: [{
                  gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                  },
                  ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                  }
        
                }],
                yAxes: [{
                  display: false
                }],
            },
            elements: {
              line: {
                borderWidth: 1,
                fill: false
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            }
        },
        labels : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        chartType : 'line',
        legend : false
      }
    }
  }

  churn (){
    this.churnData = {
      count : 1000,
      chartProperty : {
        colors : [{
            backgroundColor: 'rgba(255,255,255,.3)',
            borderWidth: 0
        }],
        data : [
          {data:[1, 18, 9, 17, 34, 22, 11]}
        ],
        options : {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            fill : false,
            scales: {
                xAxes: [{
                  gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                  },
                  ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                  }
        
                }],
                yAxes: [{
                  display: false
                }],
            },
            elements: {
              line: {
                borderWidth: 1,
                fill: false
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            }
        },
        labels : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        chartType : 'bar',
        legend : false
      }
    }
  }

  events (){
    this.eventdata = {
      colors : [{
          backgroundColor: this.convertHex('#63c2de',10),
          borderColor: '#63c2de',
          pointHoverBackgroundColor: '#fff'
      }, {
        backgroundColor: 'transparent',
        borderColor: '#4dbd74',
        pointHoverBackgroundColor: '#fff'
      },{
        backgroundColor: 'transparent',
        borderColor: '#f86c6b',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5]
      }],
      data : [
        {data:[1, 18, 9, 17, 34, 22, 11], label : 'FM_Tuned'},
        {data:[19, 33, 1, 54, 90, 64, 24], label : 'Audio_Tuned'}
      ],
      options : {
          //scaleShowVerticalLines: false,
          responsive: true,
          //maintainAspectRatio: false,
          scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 12,
                  fontColor: '#000000',
                }
      
              }],
              yAxes: [{
                display: true
              }],
          },
          elements: {
            line: {
              borderWidth: 2
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4,
            },
          }
      },
      labels : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      chartType : 'line',
      legend : true
    }
  }

  ngOnInit() {
    $('.navbar-toggler').on('click', function(evt){
      if ($('.navbar-toggler').hasClass('sidebar-toggler')) {
        $('body').toggleClass('sidebar-hidden');
      }

      if ($('.navbar-toggler').hasClass('aside-menu-toggler')) {
        $('body').toggleClass('aside-menu-hidden');
      }
    });

    this.installs();
    this.active();
    this.engagements();
    this.churn();
    this.events();
  }

   convertHex(hex,opacity){
      hex = hex.replace('#','');
      var r = parseInt(hex.substring(0,2), 16);
      var g = parseInt(hex.substring(2,4), 16);
      var b = parseInt(hex.substring(4,6), 16);
    
      return 'rgba('+r+','+g+','+b+','+opacity/100+')';
  }

}
