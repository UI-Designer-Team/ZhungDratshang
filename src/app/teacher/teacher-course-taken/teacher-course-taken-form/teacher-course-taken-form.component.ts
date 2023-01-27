import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/app/api.service';
import { AppComponent } from 'src/app/app.component';
import { teacherDetails } from 'src/app/model.ts/model';

@Component({
  selector: 'app-teacher-course-taken-form',
  templateUrl: './teacher-course-taken-form.component.html',
  styleUrls: ['./teacher-course-taken-form.component.css']
})
export class TeacherCourseTakenFormComponent implements OnInit {
  teacherCourseTakenForm:FormGroup
  ELEMENT_DATA:teacherDetails[]=[]
  id:any
  constructor( @Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<AppComponent>, private APISERVICE:APIService) { }

  ngOnInit(): void {
    this.id= this.data.value
    this.APISERVICE.readTPD().subscribe((result)=>{
      console.log(result);
      this.ELEMENT_DATA  =  result;
    })
    this.teacherCourseTakenForm = new FormGroup ({
      teacher: new FormControl(null, Validators.required),
      course: new FormControl(null, Validators.required),
      organiztion: new FormControl(null, Validators.required),
      batch: new FormControl(null, Validators.required),
      classs: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      remarks: new FormControl(null, Validators.required),
    })
  }
  onSubmit(){
    console.log(this.teacherCourseTakenForm.value, "data from Form");
    this.APISERVICE.createTeacherCT(this.teacherCourseTakenForm.value, 1).subscribe((result)=>{
      console.log(result, this.teacherCourseTakenForm.value.enroll_no);
    });
    this.dialogRef.close(this.teacherCourseTakenForm.value)
  }

}
