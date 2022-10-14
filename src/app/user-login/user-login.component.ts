import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userr = new User();
  err:number = 0;
  constructor(private authService : AuthService,private router :Router) { }

  ngOnInit(): void {

  }


  onLoggedin()
  {
    this.authService.logiin(this.userr.username,this.userr.password).subscribe((data)=> {
      let jwToken = data.headers.get('Authorization');
      this.authService.saveToken(jwToken || '{}');
      this.router.navigate(['/users']);              
    },(err)=>{   this.err = 1;
});

 }

}
