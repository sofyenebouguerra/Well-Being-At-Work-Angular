import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Collaboration } from 'src/app/model/collaboration';
import { AuthService } from 'src/app/service/auth.service';
import { CollaborationService } from 'src/app/service/collaboration.service';
import { AddCollaborationComponent } from '../add-collaboration/add-collaboration.component';

@Component({
  selector: 'app-list-collaboration',
  templateUrl: './list-collaboration.component.html',
  styleUrls: ['./list-collaboration.component.css']
})
export class ListCollaborationComponent implements OnInit {
  c : Collaboration[];
  idCollaboration : number;
  searchText:any;
  p :number=1;
  constructor(private collaborationService: CollaborationService,private router : Router,private dialogRef:MatDialog ,private auth:AuthService ) { }

  

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

  deleteCollabora(idCollaboration:number){
    this.collaborationService.deleteCollaboration(idCollaboration).subscribe(()=>
     this.collaborationService.getAllColaboration().
      subscribe(data=>{this.c}));
      }


      editCollaboration(idCollaboration:number){
        let collaboration;
        for (let i=0;i<this.c.length;i++) {
          if (this.c[i].idCollaboration == idCollaboration){
            collaboration= this.c[i];
          }
          this.router.navigate([`editCollaboration/${idCollaboration}`])
        }
      }

      viewCollaboration(idCollaboration:number){
        let collaboration;
        for (let i=0;i<this.c.length;i++) {
          if (this.c[i].idCollaboration == idCollaboration){
            collaboration= this.c[i];
          }
          this.router.navigate([`viewCollaboration/${idCollaboration}`])
        }
      }

      AddCollaboration(){
        this.dialogRef.open(AddCollaborationComponent)
      }

}
