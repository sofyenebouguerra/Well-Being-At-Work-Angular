import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../model/user";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"; 




@Injectable({providedIn :'root'})
export class AuthService {

    host:string ="http://localhost:8085/api"
    token : string | null;
    tokenn : string | null;
    public loggedUser:string;
    public isloggedIn: Boolean = false;
    public roles:string[];
    private helper = new JwtHelperService();


    constructor(private router:Router , private http : HttpClient){}


   

    logiin(username: string, password: string):Observable<any> {
        const body = new HttpParams()
          .set(`username`, username)
          .set(`password`, password);
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this.http.post(  this.host+"/login", body.toString(), { headers, observe: 'response' })
        
      }

      

    saveToken(access_token:string){
        localStorage.setItem('access_token',access_token);
        this.token = access_token;
        this.isloggedIn = true;
        this.decodeJWT();
      }



      decodeJWT()
      {   if (this.token == undefined)
                return;
        const decodedToken = this.helper.decodeToken(this.token);
        this.roles = decodedToken.roles;
        this.loggedUser = decodedToken.sub;
      }

      loadToken() {
        this.token  = localStorage.getItem('access_token');
        this.decodeJWT();
      }

      getToken():string |null {
        return this.token;
      }

    
      isTokenExpired(): Boolean
      {
        return  this.helper.isTokenExpired(this.token || '{}' );
      }
    


      isAdmin():Boolean{
        if (!this.roles)
            return false;
      return this.roles.indexOf('ROLE_ADMIN') >=0;
      }


      logout() { 
        this.loggedUser = undefined! ;
        this.roles = undefined!;
        this.token= undefined!;
        this.isloggedIn = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      }
      



      setLoggedUserFromLocalStorage(login : string) {
        this.loggedUser = login;
        this.isloggedIn = true;
        this.getUserRoles(login);
      }

      getUserRoles(login :string){

      }


      GetUser() {
        // @ts-ignore
        this.tokenn = localStorage.getItem('access_token');
        console.log(this.tokenn)
    
        const decodedToken = this.helper.decodeToken(this.tokenn || '{}');
        console.log(decodedToken.sub)
    
        return this.http.get<string>('http://localhost:8085/api/user-name/' + decodedToken.sub);
      }

    


}
