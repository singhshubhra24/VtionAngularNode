import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
      customRanges : any [];
      start : any;
      end : any;

      @Output() changeDate : EventEmitter<any> = new EventEmitter ();
      
      constructor() {
      }

      ngOnInit() {
          this.start = moment().subtract(29, 'days');
          this.end = moment();

          this.customRanges = [
            {
              text: 'Last 30 Days', desc: 'Last 30 Days', value: '30',
              start: moment().subtract(29, 'days'),
              end: moment(),
              default: true
            },
            {
              text: 'Last 7 Days', desc: 'Last 7 Days', value: '30',
              start: moment().subtract(6, 'days'),
              end: moment()
            },
            {
              text: 'Yesterday', desc: 'Yesterday', value: '1',
              start: moment().subtract(1, 'days').startOf('day'),
              end: moment().subtract(1, 'days').endOf('day')
            },
            {
              text: 'Today', desc: 'Today', value: '0',
              start: moment(),
              end: moment()
            }
          ];
      }

      /**
       * Trigger event to parent component
       * @param event 
       */
      getChangeDate(event) { 
          this.changeDate.emit(event);
      }
}
