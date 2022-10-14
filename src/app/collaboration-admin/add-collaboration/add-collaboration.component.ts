import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaboration } from '../../model/collaboration';
import { CollaborationService } from 'src/app/service/collaboration.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-collaboration',
  templateUrl: './add-collaboration.component.html',
  styleUrls: ['./add-collaboration.component.css']
})
export class AddCollaborationComponent implements OnInit {


  collaboration : Collaboration=new Collaboration();
  formCollaboration : FormGroup;
  messageArray:Array<{message:String}> = [];
  userFile:any;
  message:string;
  imagePath:any;
  imgURL:any;

  constructor(private formBuilder : FormBuilder ,private activatedRoute : ActivatedRoute, 
    private collaborationService : CollaborationService , private auth:AuthService ,  private router : Router) {

    }

  ngOnInit(): void { 
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    
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

  AddCollaboration(){  
     
          this.collaborationService.addCollaboration(this.collaboration,this.userFile).subscribe(
            (data)=>{
              console.log(data)
            },
            
            );  console.log("mochkla") 
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
