import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaboration } from '../model/collaboration';
import { HttpClient, HttpHeaders , HttpHandler , HttpResponse, HttpParams} from "@angular/common/http";
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CollaborationService {

  constructor(private http : HttpClient,private auth:AuthService) { }

  getAllColaboration() :Observable<Collaboration[]>{
    let jwt = this.auth.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Collaboration[]>("http://localhost:8085/Collaboration/Collaboration/retrieveAllCollaborations",{headers:httpHeaders})
  }
  getCollaborationById( idCollaboration : number){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get("http://localhost:8085/Collaboration/Collaboration/retrieveCollaboration/"+idCollaboration,{headers:httpHeaders})
  }
  updateCollaboration(Collaboration: Collaboration){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put("http://localhost:8085/Collaboration/Collaboration/updateCollaboration",Collaboration,{headers:httpHeaders})
  }

  addCollaboration(collaboration :any,userFile:any):Observable<Collaboration>{
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const formData = new FormData();
    formData.append('file',userFile)
    formData.append('body',JSON.stringify(collaboration) )
    return this.http.post<Collaboration>("http://localhost:8085/Collaboration/addCollaboration",formData,{headers:httpHeaders})
  }

  deleteCollaboration(idCollaboration: number){
    let jwt = this.auth.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete("http://localhost:8085/Collaboration/Collaboration/deleteCollaboration/"+idCollaboration,{headers:httpHeaders})
  }
}
