import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../model/role';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private ar:ActivatedRoute , private service : UserService,private auth: AuthService,private router:Router) { }
  user : User ;
 
  
  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/user-login']);
    
   let username  = this.ar.snapshot.params.username;
    
     this.service.getUser(username).subscribe(data=>this.user=data)

  }



addAdmin(){
  let username  = this.ar.snapshot.params.username;
  let name ="ROLE_ADMIN";

    this.service.AddAdmin(username,name).subscribe(  ()=>{ alert("Admin Added");})

}


Remove(){
  let username  = this.ar.snapshot.params.username;
  this.service.RemoveRole(username).subscribe(  ()=>{ alert("Roles Removed");})

}






  

}
