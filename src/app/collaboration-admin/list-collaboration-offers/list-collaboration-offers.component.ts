import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaboration } from 'src/app/model/collaboration';
import { Offer } from 'src/app/model/offer';
import { AuthService } from 'src/app/service/auth.service';
import { CollaborationService } from 'src/app/service/collaboration.service';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-list-collaboration-offers',
  templateUrl: './list-collaboration-offers.component.html',
  styleUrls: ['./list-collaboration-offers.component.css']
})
export class ListCollaborationOffersComponent implements OnInit {

  c : Collaboration[];
  idCollaboration : any;
  idOffer : number;
  o : Offer[];
  offer :Offer;
  x:any;
  searchText:any;
  p :number=1;
  constructor(private collaborationService: CollaborationService,private offerService: OfferService,private activatedRoute : ActivatedRoute, private auth:AuthService ,  private router : Router) { }
  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);

    this.x = this.idCollaboration = this.activatedRoute.snapshot.paramMap.get('idCollaboration');
      this.offerService.getAllOffer().subscribe( 
        (data)=>{ 
          console.log(data);
          this.o = data;
        });
      }

      deleteOffer(idOffer:number){
        this.offerService.deleteOffer(idOffer).subscribe(()=>
         this.offerService.getAllOffer().
          subscribe(data=>{this.o}));
          }

          editOffer(idOffer:number){
            let offer;
            for (let i=0;i<this.o.length;i++) {
              if (this.o[i].idOffer == idOffer){
                offer= this.o[i];
              }
              this.router.navigate([`editOffer/${idOffer}`])
            }
          }

          viewCollaboration(idOffer:number){
            let offer;
            for (let i=0;i<this.o.length;i++) {
              if (this.o[i].idOffer == idOffer){
                offer= this.c[i];
              }
              this.router.navigate([`viewOffer/${idOffer}`])
            }
          }

    }
  


