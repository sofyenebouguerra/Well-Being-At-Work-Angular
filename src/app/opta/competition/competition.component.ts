import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/model/competition';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competition = new Competition();
  constructor(private userService : UserService , private router : Router) { }

  ngOnInit(): void {
  }


  add(){
    return this.userService.addCompetition(this.competition).subscribe(
      ()=>{ alert("Competition added");
             
            this.router.navigateByUrl("/opta");
    
 
          })
        }

  }


