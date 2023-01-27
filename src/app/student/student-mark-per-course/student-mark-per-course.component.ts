import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-mark-per-course',
  templateUrl: './student-mark-per-course.component.html',
  styleUrls: ['./student-mark-per-course.component.css']
})
export class StudentMarkPerCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tabOne:any="show"
  tabTwo:any;
  tabThree:any;

  firstTab(number:number){
    if(number== 1){
      this.tabOne = "show"
      this.tabTwo = "dontShow"
      this.tabThree ="dontShow"
    }
    else if(number == 2){
      this.tabTwo = "show2"
      this.tabOne ="dontShow"
      this.tabThree ="dontShow"
      console.log(number);

    }
    else if(number == 3){
      this.tabThree = "show3"
      this.tabOne ="dontShow"
      this.tabTwo ="dontShow"
    }
  }
}
