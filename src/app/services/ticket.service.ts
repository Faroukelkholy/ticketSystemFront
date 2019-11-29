import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendURL } from '../../utils/backendURL';
import { catchError } from 'rxjs/operators';
import { handleError } from './handleError';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketService {


  constructor(private http: HttpClient) {
  }

  getTickets(access_token) {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${access_token}`);
    return this.http.get(BackendURL.tickets, { headers: headers }).pipe(
      catchError(handleError)
    );
  }

  saveTicket(post, user, access_token){
    let body = {
      post: post,
      author:user
    };
    let headers = new HttpHeaders().set('Authorization', `Bearer ${access_token}`).set('Content-type', 'application/json');
    return this.http.post(BackendURL.tickets, body, { headers: headers }).pipe(
      catchError(handleError)
    );
  }


}
