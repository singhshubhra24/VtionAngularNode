import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Apps } from '../models/apps';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private http : HttpClient) { }

  getAppsData (): Observable <Apps []> {
      return this.http.get <Apps []>('http://52.66.63.28:3050/data/apps/getAll');
  }
}
