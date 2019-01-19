import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import * as $ from 'jquery';
import * as moment from 'moment';

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
  appid : string;
  start =  moment().subtract('days', 30).valueOf()/1000;
  end =  moment().valueOf()/1000;
  fromDate : string;
  toDate : string;
  
  constructor(private route: ActivatedRoute, 
        private dashboardService : DashboardService) {
  }

  installs (){
      this.dashboardService.getInstalls(this.appid, this.start.toString(), this.end.toString()).subscribe(result =>{
          if(result['statusCode'] == 200 && result['data']){
              var lables = [];
              var data = []
              var total = 0
              Object.keys(result['data']).forEach(key => {
                lables.push(key);
                data.push(result['data'][key]);
                total += result['data'][key];
              })

              this.installdata = {
                count : total,
                chartProperty : {
                  colors : [{
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)'
                  }],
                  data : [
                    {data:data}
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
                  labels : lables,
                  chartType : 'line',
                  legend : false
                }
              }
          }
      });
  }

  active (){
    this.dashboardService.getInstalls(this.appid, this.start.toString(), this.end.toString()).subscribe(result =>{
        if(result['statusCode'] == 200 && result['data']){
            var lables = [];
            var data = []
            var total = 0
            Object.keys(result['data']).forEach(key => {
              lables.push(key);
              data.push(result['data'][key]);
              total += result['data'][key];
            })

            this.activedata = {
              count : total,
              chartProperty : {
                colors : [{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)'
                }],
                data : [
                  {data:data}
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
                labels : lables,
                chartType : 'line',
                legend : false
              }
            }
        }
    });
  }

  engagements (){
      this.engagementData = {
        count : 0,
        chartProperty : {
          colors : [{
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)'
          }],
          data : [
            {data:[]}
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
          labels : [],
          chartType : 'line',
          legend : false
        }
      }
  }

  churn (){
      this.churnData = {
        count : 0,
        chartProperty : {
          colors : [{
              backgroundColor: 'rgba(255,255,255,.3)',
              borderWidth: 0
          }],
          data : [
            {data:[]}
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
          labels : [],
          chartType : 'bar',
          legend : false
        }
      }
  }

  events (start, end){
      this.fromDate = moment(start*1000).format('MMM DD, YYYY');
      this.toDate = moment(end*1000).format('MMM DD, YYYY')

      this.dashboardService.getEvents(this.appid, start.toString(), end.toString()).subscribe(result =>{
        if(result['statusCode'] == 200 && result['data']){
          var lables = [];
          var data = []
          Object.keys(result['data']).forEach(lable => {
              let tmpdata = [];
              Object.keys(result['data'][lable]).forEach(date => {
                  if(lables.indexOf(date) == -1){
                    lables.push(date);
                  }
                  tmpdata.push(result['data'][lable][date]);
              });

              data.push({
                data : tmpdata,
                label : lable
            });
          });

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
              // data : [
              //   {data:[1, 18, 9, 17, 34, 22, 11], label : 'FM_Tuned'},
              //   {data:[19, 33, 1, 54, 90, 64, 24], label : 'Audio_Tuned'}
              // ],
              data :  data,
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
              //labels : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
              lables : lables,
              chartType : 'line',
              legend : true
          }
        }
      });
  }

  ngOnInit() {
      $('body').removeClass('sidebar-hidden');
      $('ul.navbar-nav').show();

      // this.route.paramMap.subscribe(params => {
      //   this.appid = params.get("appid")
      // })

      this.appid = this.route.snapshot.paramMap.get("appid");
      this.installs();
      this.active();
      this.engagements();
      this.churn();
      this.events(this.start, this.end);
  }

  convertHex(hex,opacity){
      hex = hex.replace('#','');
      var r = parseInt(hex.substring(0,2), 16);
      var g = parseInt(hex.substring(2,4), 16);
      var b = parseInt(hex.substring(4,6), 16);
    
      return 'rgba('+r+','+g+','+b+','+opacity/100+')';
  }

  selectEventTime (time){
      //console.log(`time : ${time}`);
      this.eventdata = '';
      var start = this.start, end = this.end;
      switch(time){
          case 'day' : {
              start = moment().startOf('day').valueOf()/1000;
              end = moment().endOf('day').valueOf()/1000;
              break;
          }
          case 'month' : {
              start = moment().subtract('days',30).startOf('day').valueOf()/1000;
              end = moment().endOf('day').valueOf()/1000;
              break;
          }
          case 'month' : {
              start = moment('01-01-'+moment().format('YYYY'), 'DD-MM-YYYY').startOf('day').valueOf()/1000;
              end = moment().endOf('day').valueOf()/1000;
              break;
          }
      }
      //console.log(start, "  ", end);
      this.events(start, end);
  }

}
