import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  collapsed:boolean;
  constructor( private service:ServiceService,) { }

  ngOnInit(): void {
    this.service.bSubject.subscribe((d) => {
      this.collapsed = d;
      console.log(d);
    })
  }

}
