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
  eventMsg = '';
  appid : string;
  start =  moment().subtract('days', 30).valueOf()/1000;
  end =  moment().valueOf()/1000;
  fromDate : string;
  toDate : string;
  
  constructor(private route: ActivatedRoute, 
        private dashboardService : DashboardService) {
  }

  installs (start, end){
      this.dashboardService.getInstalls(this.appid, start.toString(), end.toString()).subscribe(result =>{
          if(result.statusCode == 200 && result.data){
              var lables = [];
              var data = []
              var total = 0
              // sorted array with value
              result.data = this.shortObject(result.data);
              Object.keys(result.data).forEach(key => {
                lables.push(key);
                data.push(result.data[key]);
                total += result.data[key];
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

  active (start, end){
    this.dashboardService.getInstalls(this.appid, start.toString(), end.toString()).subscribe(result =>{
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

  engagements (start, end){
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

  churn (start, end){
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
        if(result.statusCode == 200 && result.data && Object.entries(result.data).length > 0 ){
          this.eventMsg = '';
          var lables = [];
          var data = [];
          var colors = [];
          // get event name from dynamic obje
          Object.keys(result.data).forEach(lable => {
              let tmpdata = [];
              // sorted array with value
              result.data[lable] = Object.keys(result.data[lable])
                                          .sort().reduce((a, v) => {
                                            a[v] = result.data[lable][v];
                                            return a; }
                                        , {});

              // get dynamic event date
              Object.keys(result.data[lable]).forEach(date => {
                  if(lables.indexOf(date) == -1){
                    lables.push(date);
                  }
                  tmpdata.push(result.data[lable][date]);
              });

              let color = this.getRandomColor();
              colors.push({
                  backgroundColor: color,
                  borderColor: color,
                  //pointHoverBackgroundColor: '#fff'
              });

              data.push({
                data : tmpdata,
                label : lable
            });
          });

          this.eventdata = {
              colors : colors,
              data : data,
              options : {
                  scaleShowVerticalLines: false,
                  responsive: true,
                  maintainAspectRatio: false,
                  fill : false,
                  scales: {
                      xAxes: [{
                            stacked: true,
                            gridLines: {
                                display:false
                            },
                            scaleLabel: {
                              display: true,
                              labelString: 'Date'
                            }
                        }],
                        yAxes: [{
                          stacked: true,
                            gridLines: {
                                display:false
                            },
                            scaleLabel: {
                              display: true,
                              labelString: 'Event Count'
                            }
                        }]
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
              chartType : 'bar',
              legend : true        
          }
        }
        else {
            this.eventMsg = "Event not found!"
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
      this.installs(this.start, this.end);
      this.active(this.start, this.end);
      this.engagements(this.start, this.end);
      this.churn(this.start, this.end);
      this.events(this.start, this.end);
  }

  /**
   * Get current timefram
   * @param time 
   */
  selectEventTime ({start, end}){
      // //console.log(`time : ${time}`);
      // this.eventdata = '';
      // var start = this.start, end = this.end;
      // switch(time){
      //     case 'day' : {
      //         start = moment().startOf('day').valueOf()/1000;
      //         end = moment().endOf('day').valueOf()/1000;
      //         break;
      //     }
      //     case 'month' : {
      //         start = moment().subtract('days',30).startOf('day').valueOf()/1000;
      //         end = moment().endOf('day').valueOf()/1000;
      //         break;
      //     }
      //     case 'month' : {
      //         start = moment('01-01-'+moment().format('YYYY'), 'DD-MM-YYYY').startOf('day').valueOf()/1000;
      //         end = moment().endOf('day').valueOf()/1000;
      //         break;
      //     }
      // }
      //console.log(start, "  ", end);
      this.eventdata = '';
      this.eventMsg = '';
      this.events(moment(start, 'YYYY-MM-DD').valueOf()/1000, moment(end, 'YYYY-MM-DD').valueOf()/1000);
  }

  /**
   * Get input from datepicker child
   * @param event 
   */
  getChangeDate ({start, end}){
      this.installs(moment(start, 'YYYY-MM-DD').valueOf()/1000, moment(end, 'YYYY-MM-DD').valueOf()/1000);
      this.active(moment(start, 'YYYY-MM-DD').valueOf()/1000, moment(end, 'YYYY-MM-DD').valueOf()/1000);
      this.engagements(moment(start, 'YYYY-MM-DD').valueOf()/1000, moment(end, 'YYYY-MM-DD').valueOf()/1000);
      this.churn(moment(start, 'YYYY-MM-DD').valueOf()/1000, moment(end, 'YYYY-MM-DD').valueOf()/1000);
  }

  /**
   * Get random hex color code
   */
  private getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
  }
  
  /**
   * get sorted object 
   * @param data 
   * @return object
   */
  private shortObject (data: any){
     return Object.keys(data)
                    .sort().reduce((a, v) => {
                      a[v] = data[v];
                      return a; }
                  , {});
  }
}
