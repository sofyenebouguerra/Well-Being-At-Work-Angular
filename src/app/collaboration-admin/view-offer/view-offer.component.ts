import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { AuthService } from 'src/app/service/auth.service';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {
  idUser: any;
  offer : any;
  o : Offer[];
  
  title:any;
  button: any;
  idoffer:any;
  formoffer : FormGroup;

  constructor(private formBuilder : FormBuilder ,private activatedRoute : ActivatedRoute , 
    private offerService : OfferService, private auth:AuthService ,  private router : Router){}

  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    this.idoffer = this.activatedRoute.snapshot.paramMap.get('idOffer');
    console.log(this.idoffer);
    
      this.offerService.getOfferById(this.idoffer).subscribe(
        (data)=>{
        console.log(data);
        this.offer = data
        });
   
    this.formoffer = this.formBuilder.group({
      idoffer:[''],
      title:[''],
      starDateOf:[''],
      endDateOf:[''],
      nplaces:[''],
      picture:[''],

    })
  }

}
