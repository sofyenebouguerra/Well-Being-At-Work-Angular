import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicity } from '../model/publicity';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicityService {

  constructor(private http : HttpClient,private auth:AuthService) { }

  getAllColaboration() :Observable<Publicity[]>{
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Publicity[]>("http://localhost:8085/Publicity/retrieveAllPublicity",{headers:httpHeaders})
  }
  getpublicityById( idpublicity : number){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get("http://localhost:8085/Publicity/retrievePublicity/"+idpublicity,{headers:httpHeaders})
  }
  updatepublicity(publicity: Publicity){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put("http://localhost:8085/Publicity/updatePublicity",publicity,{headers:httpHeaders})
  }

  addpublicity(publicity :Publicity,userFile:any):Observable<Publicity>{
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const formData = new FormData();
    formData.append('file',userFile)
    formData.append('body',JSON.stringify(publicity) )
    return this.http.post<Publicity>("http://localhost:8085/Publicity/addPublicity",formData,{headers:httpHeaders})
  }

  deletepublicity(idpublicity: number){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete("http://localhost:8085/Publicity/deletePublicity/"+idpublicity,{headers:httpHeaders})
  }
  
}
