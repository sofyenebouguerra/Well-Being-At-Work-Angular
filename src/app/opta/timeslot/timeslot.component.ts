import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timeslot } from 'src/app/model/timeslot';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {

  timeslot = new Timeslot();
  constructor(private userService : UserService , private router : Router) { }

  ngOnInit(): void {
  }


  add(){
    return this.userService.addTimesLot(this.timeslot).subscribe(
      ()=>{ alert("timeslot added");
             
            this.router.navigateByUrl("/opta");
    
 
          })
        }

  }


