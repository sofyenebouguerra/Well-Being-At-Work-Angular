import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  formuser : FormGroup ;

  constructor(private auth:AuthService ,  private ar :ActivatedRoute , private fb : FormBuilder , private service : UserService , private router : Router) { }

  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/user-login']);

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



 update()
 {
   let fd=new FormData();
   let id  = this.ar.snapshot.params.id;
   fd.append("user",JSON.stringify(this.formuser.value));
   fd.append("f",this.file);
   this.service.updateUser(id,fd).subscribe(
     ()=>{ alert("user updated");
           this.router.navigateByUrl("/users");
           

         }
   )

 }



}
