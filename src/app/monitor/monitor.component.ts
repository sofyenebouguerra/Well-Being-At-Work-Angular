import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { health } from '../model/health';
import { monitor } from '../model/monitor';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  monitor : monitor ; 
  health : health ; 

  constructor(private userService : UserService , private router : Router) { }

  ngOnInit(): void {

    this.userService.getMonitorInfo().subscribe(
      (data)=>{ 
        console.log(data);
        this.monitor=data
      });

      this.userService.getMonitorHealth().subscribe(
        (a)=>{ 
          console.log(a);
          this.health=a
        });
  }




  MonitorInfo(){
    this.userService.getMonitorInfo().subscribe(data=>this.monitor=data)
  }

  MonitorHealth(){
    this.userService.getMonitorHealth().subscribe(data=>this.health=data)
  }

} 
