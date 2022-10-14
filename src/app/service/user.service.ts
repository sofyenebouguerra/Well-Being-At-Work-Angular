import { HttpClient, HttpHeaders , HttpHandler , HttpResponse, HttpParams} from "@angular/common/http";
import { ParseSourceSpan } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Competition } from "../model/competition";
import { health } from "../model/health";
import { monitor } from "../model/monitor";
import { Room } from "../model/room";
import { Timeslot } from "../model/timeslot";
import { TimeTable } from "../model/timeTable";
import { User } from "../model/user";

import { AuthService } from "./auth.service";

@Injectable({providedIn:"root"})
export class UserService{

    host:string ="http://localhost:8085/api"
    constructor(private http : HttpClient, private auth:AuthService){

    }

    public getAllUsers():Observable<User[]>{
      let jwt = this.auth.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      this.auth.loadToken();
        return this.http.get<User[]>(this.host+"/users",{headers:httpHeaders});
    }




    public deleteUser(username:any):Observable<User>{
      let jwt = this.auth.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.delete<User>(this.host+"/delete-user/"+username,{headers:httpHeaders})
    }

    public getUser(username:string):Observable<User>{
      let jwt = this.auth.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.get<User>(this.host+"/user/"+username,{headers:httpHeaders})
    }

    public updateUser(id:number,fd:FormData):Observable<User>{
      let jwt = this.auth.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<User>(this.host+"/update-user/"+id,fd,{headers:httpHeaders})
    }

    public addUser(fd:FormData):Observable<User>
  {
    return this.http.post<User>(this.host+"/user/save",fd);
  }

  public forgotPassword(email:string){
    let queryParams = {'email':email};
    return this.http.post(this.host+"/forgot-password",email,{params:queryParams});
  }

  public updatePassword(password:string , token:string ){
    let queryParams ={'token': token}
    return this.http.put(this.host+"/reset-password",password,{params:queryParams} )
  }


public AddRoom(room:Room):Observable<any>{
  const headers = { 'content-type': 'application/json'} 
  const body=JSON.stringify(room);
  return this.http.post<any>('http://localhost:8085/rooms',body,{'headers':headers})
}

public addTimesLot(timeslot :Timeslot):Observable<any>{
  const headers = { 'content-type': 'application/json'} 
  const body=JSON.stringify(timeslot);
  return this.http.post<any>('http://localhost:8085/timeslots',body,{'headers':headers})  
}

public addCompetition(Competition : Competition):Observable<any>{
  const headers = { 'content-type': 'application/json'}
  const body = JSON.stringify(Competition);
  return this.http.post<any>('http://localhost:8085/competitions',body,{'headers':headers})  
}



public getTimeTable():Observable<TimeTable>{
  
  return this.http.get<TimeTable>('http://localhost:8085/timeTable')  
}




public Solve(): Observable<any> {
  return this.http.post<any>('http://localhost:8085/timeTable/solve', null);
}

public StopSolve(): Observable<any> {
  return this.http.post<any>('http://localhost:8085/timeTable/stopSolving', null);
}


public getMonitorInfo():Observable<monitor>{
  
  return this.http.get<monitor>('http://localhost:8085/admin/info')  
}


public getMonitorHealth():Observable<health>{
  
  return this.http.get<health>('http://localhost:8085/admin/health')  
}


public AddAdmin(username:string, name:string ):Observable<any>{
  let jwt = this.auth.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  name="ROLE_ADMIN"
    return this.http.post<any>(this.host+"/role/addtouser/"+username+"/"+name,{headers:httpHeaders})
}


public RemoveRole(username:string ):Observable<any>{
  let jwt = this.auth.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<any>(this.host+"/delete-user-role/"+username,{headers:httpHeaders})
}

}
