import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DashboardTopChunk, DashboardEvents } from '../models/dashboard';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    constructor(private http : HttpClient) { }

    getInstalls (appid, start, end): Observable <DashboardTopChunk> {
        return this.http.post <DashboardTopChunk>(environment.API_URL+'/data/install/getStats',{
            "appid" : appid,
            "startDate" : start,
            "endDate" : end
           
        });
    }

    // getUninstalls (): Observable <DashboardTopChunk> {
        
    // }

    // getActiveUsers (): Observable <DashboardTopChunk> {
       
    // }

    // getEngagements (): Observable <DashboardTopChunk> {
        
    // }

    getEvents (appid, start, end): Observable <DashboardEvents> {
        return this.http.post <DashboardTopChunk>(environment.API_URL+'/data/events/getData',{
            "appid" : appid,
            "startDate" : start,
            "endDate" : end
           
        });
    }
}
