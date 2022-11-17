import { Component, Input, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {
  @Input() collapsed = true;
  @Input() screenWidth=0;
  index = 0;
  tab1:any;
  
  constructor() { }

  ngOnInit(){
    this.getBodyClass()
    console.log(this.collapsed);
    
  }
  getBodyClass():string{
    let styleClass ='';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
