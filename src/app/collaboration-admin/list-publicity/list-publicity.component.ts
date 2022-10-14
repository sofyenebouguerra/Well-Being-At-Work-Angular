import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Publicity } from 'src/app/model/publicity';
import { AuthService } from 'src/app/service/auth.service';
import { PublicityService } from 'src/app/service/publicity.service';
import { AddPublibtyComponent } from '../add-publibty/add-publibty.component';

@Component({
  selector: 'app-list-publicity',
  templateUrl: './list-publicity.component.html',
  styleUrls: ['./list-publicity.component.css']
})
export class ListPublicityComponent implements OnInit {

  p : Publicity[];
  idPublicity : number;
  searchText:any;
  pa :number=1;
  constructor(private publicityService: PublicityService,private dialogRef:MatDialog , private auth:AuthService ,  private router : Router) { }

  

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

  deletePublicity(idPublicity:number){
    this.publicityService.deletepublicity(idPublicity).subscribe(()=>
     this.publicityService.getAllColaboration().
      subscribe(data=>{this.p}));
      }


      editPublicity(idpublicity:number){
        let publicity;
        for (let i=0;i<this.p.length;i++) {
          if (this.p[i].idPublicity == idpublicity){
            publicity= this.p[i];
          }
          this.router.navigate([`editpublicity/${idpublicity}`])
        }
      }

      viewpublicity(idpublicity:number){
        let publicity;
        for (let i=0;i<this.p.length;i++) {
          if (this.p[i].idPublicity == idpublicity){
            publicity= this.p[i];
          }
          this.router.navigate([`viewpublicity/${idpublicity}`])
        }
      }

      AddPublicity(){
        this.dialogRef.open(AddPublibtyComponent)
      }

}
