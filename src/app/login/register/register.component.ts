import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formuser : FormGroup ;


  constructor(private fb : FormBuilder , private service : UserService , private router : Router) { }

  ngOnInit(): void {
    this.formuser = this.fb.group(
      {name:['',[Validators.required,Validators.minLength(5)]],
     username:['',[Validators.required,Validators.minLength(1)]],
     email:['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
     password:['',[Validators.required],Validators.minLength(4),Validators.maxLength(100)],
     picture:['',Validators.required],
     phoneNumber:[0,Validators.required]



     }
    )
  }



file:File
urlImg:any
 selectFile(event:any)
 { this.file= event.target.files[0]
  // console.log(event)
  let fr=new FileReader();
  fr.readAsDataURL(this.file);
  fr.onload=(event)=>this.urlImg=fr.result
 }



 ajouter()
 {
   let fd=new FormData();
   fd.append("user",JSON.stringify(this.formuser.value));
   fd.append("f",this.file);
   this.service.addUser(fd).subscribe(
     ()=>{ alert("user added");
            
           this.router.navigateByUrl("/login");
           

         }
   )

 }



}