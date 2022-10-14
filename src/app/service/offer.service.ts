import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../model/offer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http :HttpClient,private auth:AuthService) { }

  getAllOffer():Observable<Offer[]>{
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Offer[]>("http://localhost:8085/Offer/retrieveAllOffers/",{headers:httpHeaders})
  }
  getOfferById( idOffer : number){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get("http://localhost:8085/Offer/retrieveOffer/"+idOffer,{headers:httpHeaders})
  }
  updateOffer(offer: Offer){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put("http://localhost:8085/Offer/updateOffer/",offer,{headers:httpHeaders})
  }

  addOffer(offer :Offer,idCollaboration : number,userFile:any){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const formData = new FormData();
    formData.append('file',userFile)
    formData.append('body',JSON.stringify(offer) )
    return this.http.post("http://localhost:8085/Offer/addOffer/"+idCollaboration,formData,{headers:httpHeaders})
  }

  deleteOffer(idOffer: number){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete("http://localhost:8085/Offer/deleteOffer/"+idOffer,{headers:httpHeaders})
  }
}
