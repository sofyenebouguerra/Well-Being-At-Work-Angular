import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users : User[]
  p :number=1;
  searchText:any;


  constructor(private auth: AuthService , private service : UserService , ar : ActivatedRoute,private router : Router) { }

  

  getAllUsers(){
    this.service.getAllUsers().subscribe(data=>this.users=data)
  }

  deleteUser(username:string){
    this.service.deleteUser(username).subscribe(
      ()=>this.getAllUsers()
    )
  }
  onLogout(){
    this.auth.logout();
  }
  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null || 
        this.auth.isTokenExpired())
          this.router.navigate(['/login']);
    

    this.service.getAllUsers().subscribe(
      (data)=>{ 
        console.log(data);
        this.users=data
      });
  }

}
