import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendURL } from '../../utils/backendURL';
import { catchError } from 'rxjs/operators';
import { handleError } from './handleError';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {


  constructor(private http: HttpClient) {
  }

  getTicketStatisctis(access_token) {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${access_token}`);
    return this.http.get(BackendURL.statistics +'/tickets', { headers: headers }).pipe(
      catchError(handleError)
    );
  }



}
