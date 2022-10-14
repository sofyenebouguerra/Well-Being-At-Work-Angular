import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  formroom : FormGroup ;
  room = new Room();

  constructor(private userService : UserService , private router:Router) { }

  ngOnInit(): void {
  }


  add(){
   

    return this.userService.AddRoom(this.room).subscribe(
      ()=>{ alert("Room added");
             
            this.router.navigateByUrl("/opta");
    
 
          })
        }

       

}
