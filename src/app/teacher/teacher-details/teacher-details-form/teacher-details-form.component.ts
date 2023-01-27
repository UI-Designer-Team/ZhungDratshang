import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/app/api.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-teacher-details-form',
  templateUrl: './teacher-details-form.component.html',
  styleUrls: ['./teacher-details-form.component.css']
})
export class TeacherDetailsFormComponent implements OnInit {
  teacherDetailForm: FormGroup;
  isEdit:boolean;
  constructor( @Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<AppComponent>, private APISERVICE:APIService) { }

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    console.log(this.data, "data from modalCOntroller");
    this.teacherDetailForm = new FormGroup ({
      id: new FormControl(null, Validators.required),
      cid: new FormControl(null, Validators.required),
      first_name: new FormControl(null, Validators.required),
      second_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      village: new FormControl(null, Validators.required),
      gewog: new FormControl(null, Validators.required),
      dzongkhag: new FormControl(null, Validators.required),
    });

    if(this.data.isEdit){
      this.getData();
      console.log(this.data, "data from modalCOntroller");
    }
  }
  onSubmit(){
    if(this.data.isEdit){
      console.log(this.data.isEdit);

      this.APISERVICE.updateTPD(this.data.selectedData.id,this.teacherDetailForm.value).subscribe((result)=>{
          console.log(result ,"edit");
        });
        this.dialogRef.close(this.teacherDetailForm.value)
    }
    else{
    console.log(this.teacherDetailForm.value, "data from Form");
    this.APISERVICE.createTeacherDetials(this.teacherDetailForm.value).subscribe((result)=>{
      console.log(result, this.teacherDetailForm.value.enroll_no);
    });
    this.dialogRef.close(this.teacherDetailForm.value)
  }

  }
  getData(){
    this.teacherDetailForm.patchValue({
      id: this.data.selectedData.id,
      cid: this.data.selectedData.cid,
      first_name: this.data.selectedData.first_name,
      second_name: this.data.selectedData.second_name,
      last_name: this.data.selectedData.last_name,
      village: this.data.selectedData.village,
      gewog: this.data.selectedData.gewog,
      dzongkhag: this.data.selectedData.dzongkhag,
    })

  }


}
