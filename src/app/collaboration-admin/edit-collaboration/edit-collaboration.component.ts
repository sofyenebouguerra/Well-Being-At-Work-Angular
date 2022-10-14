import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CollaborationService } from 'src/app/service/collaboration.service';

@Component({
  selector: 'app-edit-collaboration',
  templateUrl: './edit-collaboration.component.html',
  styleUrls: ['./edit-collaboration.component.css']
})
export class EditCollaborationComponent implements OnInit {
  collaboration : any;
  formCollaboration : FormGroup;
  idCollaboration: any;

  private ratingArr = [];

  constructor(private formBuilder : FormBuilder ,private activatedRoute : ActivatedRoute , private auth:AuthService ,  private router : Router, 
    private collaborationService : CollaborationService,private snackBar: MatSnackBar) { }

  ngOnInit(): void { 
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    this.idCollaboration = this.activatedRoute.snapshot.paramMap.get('idCollaboration');
    this.collaborationService.getCollaborationById(this.idCollaboration).subscribe(
      (data)=> {
        this.collaboration = data;
      });

    this.formCollaboration = this.formBuilder.group({
      name:[''],
      description:[''],
      phone:[''],
      town:[''],
      email:[''],
      date:[''],
      picture:[''],
    });
  }

  
  EditCollaboration(){   
    this.collaborationService.updateCollaboration(this.collaboration).subscribe(
      (data)=>{
        console.log(data)
      }
      );   
}

  }

