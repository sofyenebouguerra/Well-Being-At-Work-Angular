import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeTable } from '../model/timeTable';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-opta',
  templateUrl: './opta.component.html',
  styleUrls: ['./opta.component.css']
})
export class OptaComponent implements OnInit {
  timeTable :TimeTable
  p :number=1;
  searchText:any;

  constructor(private UserService : UserService , private router : Router ) { }

  ngOnInit(): void {
    this.UserService.getTimeTable().subscribe(
      (data)=>{ 
        console.log(data);
        this.timeTable=data
      });
  }



  getTimeTable(){
    this.UserService.getTimeTable().subscribe(data=>this.timeTable=data)
  }

  solve(){
    this.UserService.Solve().subscribe(data=>{})
  }


  stop(){
    this.UserService.StopSolve().subscribe(data=>{})
  }
 
 
}
