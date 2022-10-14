import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collaboration } from 'src/app/model/collaboration';
import { AuthService } from 'src/app/service/auth.service';
import { CollaborationService } from 'src/app/service/collaboration.service';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent implements OnInit {

  c : Collaboration[];
  idCollaboration : number;
  searchText:any;
  p :number=1;
  constructor(private collaborationService: CollaborationService, private auth:AuthService ,  private router : Router ) { }

  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    this.collaborationService.getAllColaboration().subscribe(
      (data)=>{ 
        console.log(data);
        this.c=data
      });   
  }

  addOffer(idCollaboration:number){
      this.router.navigate([`addOffer/${idCollaboration}`])
    }

    viewOffer(idCollaboration:number){
      
        this.router.navigate([`viewOffers/${idCollaboration}`])
    }

    
  

}
