import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

const routes : Routes =[
    {
        path:'',
        component : HomeComponent
    },
    {
      path:'dashboard/:appid',
      component : DashboardComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    SharedModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, SidebarComponent, HomeComponent],
  exports: [DashboardComponent]
})
export class PagesModule { }
