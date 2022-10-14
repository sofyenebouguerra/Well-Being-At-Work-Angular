import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Collaboration } from 'src/app/model/collaboration';
import { Offer } from 'src/app/model/offer';
import { CollaborationService } from 'src/app/service/collaboration.service';
import { OfferService } from 'src/app/service/offer.service';
import { ReservationComponent } from '../reservation/reservation.component';
import * as moment from 'moment';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
dates:Date[]=[];
  c : Collaboration[];
  idCollaboration : number;
  o : any;
  of : Offer;
  dataDate:any;
  offer : Offer = new Offer();
  searchText:any;
  p :number=1;
  pa :number=1;

  
  constructor(private collaborationService: CollaborationService,
              private offerService: OfferService,
              private dialogRef:MatDialog, private auth:AuthService ,  private router : Router) { }
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

      this.offerService.getAllOffer().subscribe(
        (data)=>{ 
          console.log(data);
          this.o=data
          for(var i=0;i<data.length;i++){
            console.log(data[i].starDateOf);
            this.dates[i]=data[i].starDateOf;
            console.log("***********");
            console.log(this.CalculDate(i));
          }
          console.log(this.dates[0]);
          console.log(moment(this.dates[0]).unix());
        });

     
  }

  AddCollaboration(){
    this.dialogRef.open(ReservationComponent)
  }

  CalculDate(i:number){
    let end:any =moment(this.dates[i]).unix();;
    
    
    let start:any =  moment(Date()).unix();

    let time =   end - start ;
      console.log("tiimeee: "+time)
      console.log(end)
      console.log(start)
    let diffDay = Math.floor(time / 86400000) ; //day

    console.log(diffDay)
    let diffHour = Math.floor((time % 86400000) / 36000); //hour
    let diffMinute = Math.floor(((time % 86400000) % 36000 ) / 6000)
    if(diffDay >= 1){
      return diffDay;
    }else if (diffHour >= 60){
       return diffHour;
    }else 
    return diffMinute;
   
  }

  hourTime(key : any){

    let start:any  = new Date().getTime();
    let end:any = new Date().getTime();

    let time = start  - end ;

    let diffDay = Math.floor(time / 86400000) ; //day
    let diffHour = Math.floor((time % 86400000) / 36000); //hour
    let diffMinute = Math.floor(((time % 86400000) % 36000 ) / 6000)

    if(diffDay >= 1){
      return key ="d";
    }else if(diffHour >=60) {
      return key="h";
    }else
    return key="m"

  }

  dates123(dates:any){
    this.offerService.getAllOffer().subscribe(
      (data)=>{ 
        console.log(data);
        this.o=data
        for(var i=0;i<data.length;i++){
          console.log(data[i].starDateOf.getTime());
          this.dates[i]=data[i].starDateOf;
        }
        console.log(this.dates);
      });
  }

  
}
