import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Publicity } from 'src/app/model/publicity';
import { AuthService } from 'src/app/service/auth.service';
import { PublicityService } from 'src/app/service/publicity.service';

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit {

  p : Publicity[];
  idPublicity : number;
  searchText:any;
  pa :number=1;
  constructor(private publicityService: PublicityService,private dialogRef:MatDialog, private auth:AuthService ,  private router : Router ) { }

  

  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    this.publicityService.getAllColaboration().subscribe(
      (data)=>{ 
        console.log(data);
        this.p=data
      }); 
  }

}

