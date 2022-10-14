import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient,private auth:AuthService) { }

  addReservation(reservation :Reservation ,idUser:number,idOffer:number):Observable<Reservation>{
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Reservation>("http://localhost:8085/Reservation/addReservation/"+idUser+idOffer ,reservation,{headers:httpHeaders})
  }
}
