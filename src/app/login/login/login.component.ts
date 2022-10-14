import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userr = new User();
  err:number = 0;
   
  constructor(private authService : AuthService  ,private router :Router) { }

  ngOnInit(): void {
   
  }

  onLoggedin()
  {
    this.authService.logiin(this.userr.username,this.userr.password).subscribe((data)=> {
      let jwToken = data.headers.get('Authorization');
      this.authService.saveToken(jwToken || '{}');
      if(this.authService.isAdmin()){
        this.router.navigate(['/users']); 
      }else {
        this.router.navigate(['/accueil']); 
      }
                   
    },(err)=>{   this.err = 1;
});

 }


}
