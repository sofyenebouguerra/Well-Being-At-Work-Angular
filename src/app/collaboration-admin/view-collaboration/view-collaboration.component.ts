import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaboration } from 'src/app/model/collaboration';
import { AuthService } from 'src/app/service/auth.service';
import { CollaborationService } from 'src/app/service/collaboration.service';

@Component({
  selector: 'app-view-collaboration',
  templateUrl: './view-collaboration.component.html',
  styleUrls: ['./view-collaboration.component.css']
})
export class ViewCollaborationComponent implements OnInit {

  idUser: any;
  collaboration : any;
  c : Collaboration[];
  
  title:any;
  button: any;
  idCollaboration:any;
  formCollaboration : FormGroup;

  constructor(private formBuilder : FormBuilder ,private activatedRoute : ActivatedRoute , 
    private collaborationService : CollaborationService, private auth:AuthService ,  private router : Router){}

  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    this.idCollaboration = this.activatedRoute.snapshot.paramMap.get('idCollaboration');
    console.log(this.idCollaboration);
    
      this.collaborationService.getCollaborationById(this.idCollaboration).subscribe(
        (data)=>{
        console.log(data);
        this.collaboration = data
        });
   
    this.formCollaboration = this.formBuilder.group({
      idCollaboration:[''],
      name:[''],
      description:[''],
      phone:[''],
      email:[''],
      date:[''],
      town:[''],
      picture:[''],
    })
  }

}
