import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from 'src/app/model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  errorMessage: string = "";
  constructor(private userService: UserService ,private router: Router) { }

  ngOnInit(): void {

  
    }
    
    forgotPassword(){
      this.userService.forgotPassword(this.email).subscribe( data => {
      },
      );
    }


    
    
}








   

