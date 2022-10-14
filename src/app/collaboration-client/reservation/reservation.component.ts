import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { AuthService } from 'src/app/service/auth.service';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  
  reservation : Reservation=new Reservation();
  formreservation : FormGroup;
  idUser: any;
  idOffer:any;

  constructor(private formBuilder : FormBuilder ,private activatedRoute : ActivatedRoute , 
    private reservationService : ReservationService, private auth:AuthService ,  private router : Router) {

     }

  ngOnInit(): void { 
    
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    
    this.formreservation = this.formBuilder.group({
    
      startDateRes:[''],
     endDateRes:[''],
     nmPalce:[''],
     priceTotal:[''],
     localisation:[''],
    });
  }

  AddReservation(){  
    this.idOffer = this.activatedRoute.snapshot.paramMap.get('idOffer');
    this.idUser = this.activatedRoute.snapshot.paramMap.get('idUser');

          this.reservationService.addReservation(this.reservation,this.idUser,this.idOffer).subscribe(
            (data)=>{
              console.log(data)
            }
            );   
      }

}
