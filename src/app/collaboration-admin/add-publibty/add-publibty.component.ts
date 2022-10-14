import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicity } from 'src/app/model/publicity';
import { AuthService } from 'src/app/service/auth.service';
import { PublicityService } from 'src/app/service/publicity.service';

@Component({
  selector: 'app-add-publibty',
  templateUrl: './add-publibty.component.html',
  styleUrls: ['./add-publibty.component.css']
})
export class AddPublibtyComponent implements OnInit {

 
  publicity : Publicity=new Publicity();
  formPublicity : FormGroup;
  userFile:any;
  message:string;
  imagePath:any;
  imgURL:any;

  constructor(private formBuilder : FormBuilder ,private activatedRoute : ActivatedRoute , private auth:AuthService ,  private router : Router,
    private PublicityService : PublicityService) {

    }

  ngOnInit(): void { 
    
      this.auth.loadToken();
      if (this.auth.getToken()==null || 
          this.auth.isTokenExpired())
            this.router.navigate(['/login']);
    
    this.formPublicity = this.formBuilder.group({
      title:[''],
      description:[''],
      starDatePub:[''],
      endDatePub:[''],
      picture:[''],
    });
  }

  AddPublicity(){  
     
          this.PublicityService.addpublicity(this.publicity,this.userFile).subscribe(
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
