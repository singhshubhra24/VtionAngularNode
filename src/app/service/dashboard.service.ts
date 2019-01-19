import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DashboardTopChunk, DashboardEvents } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    constructor(private http : HttpClient) { }

    getInstalls (appid, start, end): Observable <DashboardTopChunk []> {
        // return this.http.post <DashboardTopChunk []>('http://localhost:3002/data/install/getStats',{
        //     "appid" : appid,
        //     "startDate" : start,
        //     "endDate" : end
           
        // });
        return this.http.post <DashboardTopChunk []>('http://52.66.63.28:3050/data/install/getStats',{
            "appid" : appid,
            "startDate" : start,
            "endDate" : end
           
        });
    }

    // getUninstalls (): Observable <DashboardTopChunk []> {
        
    // }

    // getActiveUsers (): Observable <DashboardTopChunk []> {
       
    // }

    // getEngagements (): Observable <DashboardTopChunk []> {
        
    // }

    getEvents (appid, start, end): Observable <DashboardEvents []> {
        // return this.http.post <DashboardTopChunk []>('http://localhost:3002/data/events/getData',{
        //     "appid" : appid,
        //     "startDate" : start,
        //     "endDate" : end
           
        // });
        return this.http.post <DashboardTopChunk []>('http://52.66.63.28:3050/data/events/getData',{
            "appid" : appid,
            "startDate" : start,
            "endDate" : end
           
        });
    }
}
