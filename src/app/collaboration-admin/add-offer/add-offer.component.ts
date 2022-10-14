import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';
import { environment } from 'src/environments/environment.prod';
import * as mapboxgl from 'mapbox-gl';
import { Moment } from 'moment';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
  providers: [DatePipe]
})
export class AddOfferComponent implements OnInit {

  idCollaboration: any;
  offer : Offer=new Offer();
 mapa : mapboxgl.Map;
  title:any;
  button: any;
  idOffer:any;
  formOffer : FormGroup;
  not:any;
  userFile:any;
  message:string;
  imagePath:any;
  imgURL:any;

  minDate: Moment;

  date = new Date();

  myDate = new Date();


  constructor(private formBuilder : FormBuilder ,private ActivatedRoute : ActivatedRoute ,private router : Router,  private auth: AuthService,
    private OfferService : OfferService,private datePipe: DatePipe) {
      
     }

  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);



    const currentYear = moment().year();
    this.minDate = moment([currentYear - 1, 0, 1]);
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
console.log(this.myDate)
 this.maps();
      console.log(this.date);
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
  

  AddOffer(){
        
 

      this.idCollaboration = this.ActivatedRoute.snapshot.paramMap.get('idCollaboration');
        this.OfferService.addOffer(this.offer,this.idCollaboration,this.userFile).subscribe(
          (data)=>{
          this.not=data;
          console.log(this.not)
            console.log(data)
          }
          );
      }
    
      maps(){

        (mapboxgl as any).accessToken = environment.mapboxKey;
        this.mapa = new mapboxgl.Map({
       container: 'mapa', // container ID
       style: 'mapbox://styles/mapbox/streets-v11', // style URL
       center: [36.901259, 10.185080], // starting position
       zoom: 9 // starting zoom
       });
      }
      
    
      onSelectFile(event:any) {
      
        if (event.target.files.length > 0)
        {
          const file = event.target.files[0];
          this.userFile = file;
         // this.f['profile'].setValue(file);
     
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = "Only images are supported.";
          return;
        }
        var reader = new FileReader();
        console.log("right me")
        this.imagePath = file;
        reader.readAsDataURL(file); 
        reader.onload = (_event) => { 
          this.imgURL = reader.result; 
        }
        }}
    
    

}
