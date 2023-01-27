import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { studentAcademicDetails, studentDetails, StudentResult, teacherDetails } from 'src/app/model.ts/model';
import { ServiceService } from 'src/app/service.service';
import { TeacherCourseTakenFormComponent } from 'src/app/teacher/teacher-course-taken/teacher-course-taken-form/teacher-course-taken-form.component';
import { SADFormComponent } from '../student-academic-details/sadform/sadform.component';
    // Define the interface for a student's marks
    interface Marks {
      math: number;
      science: number;
      english: number;
      history: number;
    }
@Component({
  selector: 'app-user-student',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponentStudent implements OnInit {
  collapsed:boolean;
  index:any
  array:studentDetails[]=[];
  selectedArray:studentDetails;
  studentAcademicArray: studentAcademicDetails[];
  selectedModule:studentAcademicDetails;;
  studentId:number;
  totalMarks:number;
  isShow:boolean = false;
  firstName:string;
  middleName:string
  cid:number
  module_1:any;
  module_2:any;
  module_3:any;
  module_4:any;
  module_5:any;
  marksForm:FormGroup;
  stdNO="adssf";
  ELEMENT_DATA:StudentResult;
  array2:StudentResult[]
  percentage:number
  constructor(public dialog: MatDialog, private service:ServiceService, private APISERVICE:APIService) {
  }

  ngOnInit(): void {

    this.service.studentUserSubject.subscribe((data)=> {
      this.studentId = data;
    })

    this.service.bSubject.subscribe((d) => {
      this.collapsed = d;
      console.log(d);
    });

      this.service.studentUserSubject.subscribe((id)=>{
        this.index = id
        console.log(this.index);

      })
      this.marksForm = new FormGroup({
        student_identity_no: new FormControl(this.studentId),
        module_1: new FormControl(this.module_1),
        module_2: new FormControl(this.module_2),
        module_3: new FormControl(this.module_3),
        module_4: new FormControl(this.module_4),
        module_5: new FormControl(this.module_5),
        module1_mark: new FormControl(null),
        module2_mark: new FormControl(null),
        module3_mark: new FormControl(null),
        module4_mark: new FormControl(null),
        module5_mark: new FormControl(null),
      })
      console.log(this.marksForm.value);
      this.getModule();
    setTimeout(() => {
      this.APISERVICE.readSPD().subscribe((data)=>{
        console.log(data);
        this.array = data;
        this.selectedArray = this.array.find((data)=>{
          return data.student_identity_no == this.index
        });
        this.formInitial();
        this.firstName = this.selectedArray.first_name.toLocaleUpperCase();
        this.middleName = this.selectedArray.last_name.toLocaleLowerCase();
        this.cid = this.selectedArray.cid;
        this.stdNO = this.selectedArray.id

      });
    }, 100);

  }

  getModule(){
    this.APISERVICE.readSAD().subscribe((data)=> {
      console.log(data,"dattta");
      this.studentAcademicArray = data;
      this.selectedModule = this.studentAcademicArray.find((data)=> {
        return data.student_identity_no = this.index
      })
      this.module_1 = this.selectedModule.module_1
      this.module_2 = this.selectedModule.module_2
      this.module_3 = this.selectedModule.module_3
      this.module_4 = this.selectedModule.module_4
      this.module_5 = this.selectedModule.module_5
      console.log(this.selectedModule, "selected Module");
    })
  }

  formInitial(){
    this.marksForm = new FormGroup({
      student_identity_no: new FormControl(this.studentId),
      module_1: new FormControl(this.module_1),
      module_2: new FormControl(this.module_2),
      module_3: new FormControl(this.module_3),
      module_4: new FormControl(this.module_4),
      module_5: new FormControl(this.module_5),
      module1_mark: new FormControl(null),
      module2_mark: new FormControl(null),
      module3_mark: new FormControl(null),
      module4_mark: new FormControl(null),
      module5_mark: new FormControl(null),
    })
    console.log(this.marksForm.value);

  };

  dataArray:StudentResult[]=[];
  submitMarks(){
    console.log("triggered");
    this.isShow = true;
    // this.dataArray.push({
    //   id:this.selectedModule.id,
    //   student_identity_no: this.studentId.toString(),
    //   module_1:this.selectedModule.module_1,
    //   module_2:this.selectedModule.module_2,
    //   module_3:this.selectedModule.module_3,
    //   module_4:this.selectedModule.module_4,
    //   module_5:this.selectedModule.module_5,
    //   module1_mark: this.marksForm.get('module1_marks').value,
    //   module2_mark: this.marksForm.get('module2_marks').value,
    //   module3_mark: this.marksForm.get('module3_marks').value,
    //   module4_mark: this.marksForm.get('module4_marks').value,
    //   module5_mark: this.marksForm.get('module5_marks').value,
    // })
    this.APISERVICE.createResult(this.marksForm.value).subscribe((data)=> {
      console.log(data);
    });
    console.log(this.marksForm.value, "result");
    this.marksForm.reset();

    setTimeout(() => {
      this.APISERVICE.readResult().subscribe((result)=>{
        console.log(result);
        this.array2 = result;
        this.ELEMENT_DATA = this.array2.find((data)=>{
          return data.student_identity_no == this.studentId.toString()
        })
        this.totalMarks = parseInt(this.ELEMENT_DATA.module1_mark) + parseInt(this.ELEMENT_DATA.module2_mark) +  parseInt(this.ELEMENT_DATA.module3_mark) +  parseInt(this.ELEMENT_DATA.module4_mark) +  parseInt(this.ELEMENT_DATA.module5_mark)
        this.percentage = (this.totalMarks / 400) * 100;
      });
    }, 600);

  };

  AddSAD(datas:any) {
    const dialogRef = this.dialog.open(SADFormComponent,{
      data:{value:datas}
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "data recieved from dialog");
    });
  };



}
