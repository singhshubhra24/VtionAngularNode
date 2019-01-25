import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDaterangepickerModule } from '@qqnc/ngx-daterangepicker';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDaterangepickerModule,
    FormsModule
  ],
  declarations: [DatePickerComponent],
  exports : [DatePickerComponent]
})
export class SharedModule { }
