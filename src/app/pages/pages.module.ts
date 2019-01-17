import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes : Routes =[
    {
        path:'',
        component : DashboardComponent
    },
    {
      path:'dashboard',
      component : DashboardComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, SidebarComponent],
  exports: [DashboardComponent]
})
export class PagesModule { }
