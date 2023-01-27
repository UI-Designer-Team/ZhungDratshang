import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { teacherDetails } from 'src/app/model.ts/model';
import { ServiceService } from 'src/app/service.service';
import { TeacherCourseTakenFormComponent } from '../teacher-course-taken/teacher-course-taken-form/teacher-course-taken-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  collapsed:boolean;
  index:any
  array:teacherDetails[]=[];
  selectedArray:teacherDetails;
  constructor(public dialog: MatDialog, private service:ServiceService, private APISERVICE:APIService) { }

  ngOnInit(): void {
    this.APISERVICE.readTPD().subscribe((data)=>{
      console.log(data);
      this.array = data
     this.selectedArray = this.array.find((data)=>{
      return data.id == this.index
    })
    console.log(this.selectedArray, "selected");
    })
    this.service.bSubject.subscribe((d) => {
      this.collapsed = d;
      console.log(d);
    })
    this.service.teacherUserSubject.subscribe((id)=>{
      this.index = id
      console.log(this.index);

    })



  }
  AddTCT(datas:any) {
    const dialogRef = this.dialog.open(TeacherCourseTakenFormComponent,{
      data:{value:datas}
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "data recieved from dialog");
    });
  }

}
