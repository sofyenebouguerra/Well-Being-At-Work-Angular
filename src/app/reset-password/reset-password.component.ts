import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password: string;
  errorMessage: string = "";
  token : string  ; 
  
  
  constructor(private authenticationService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }
  updatePassword(){
    let token = this.router.url.substring(22);
    this.authenticationService.updatePassword(this.password,token).subscribe( data => {
    }, ()=>{ 
    this.router.navigateByUrl("/success");
    

  }
        );
  }


}
