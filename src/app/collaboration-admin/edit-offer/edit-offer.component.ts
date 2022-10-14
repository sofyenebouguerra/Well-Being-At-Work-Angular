import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {

  offer : any;
  formOffer : FormGroup;
  idOffer: any;

  constructor(private formBuilder : FormBuilder ,private ActivatedRoute : ActivatedRoute , private auth:AuthService ,  private router : Router,
    private OfferService : OfferService) { }

  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    this.idOffer = this.ActivatedRoute.snapshot.paramMap.get('idOffer');
    this.OfferService.getOfferById(this.idOffer).subscribe(
      (data)=> {
        this.offer = data;
      });

    this.formOffer = this.formBuilder.group({
      title:[''],
      descrption:[''],
      starDateOf:[''],
      endDateOf:[''],
      nplaces:[''],
      promotion:[''],
      percentage:[''],
      location:[''],
      prix:[''],
      rate:[''],
      picture:[''],
      Happy:[''],
    });
  }

  EditOffer(){   
    this.OfferService.updateOffer(this.offer).subscribe(
      (data)=>{
        console.log(data)
      }
      );   
}

}
