import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Apps } from '../models/apps';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppsService {
    constructor(private http : HttpClient) { }
    getAppsData (): Observable <Apps> {
        return this.http.get <Apps>(environment.API_URL+'/data/apps/getAll');
    }
}
