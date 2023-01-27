import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/app/api.service';
import { AppComponent } from 'src/app/app.component';
import { studentDetails } from 'src/app/model.ts/model';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  registrationForm: FormGroup;
  ELEMENT_DATA:any[] = [];
  filteredArray:studentDetails[] =[];
  isEdit:boolean;


  constructor( public dialogRef: MatDialogRef<AppComponent>, private APISERVICE:APIService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    console.log(this.data, "data from modalCOntroller");
      this.registrationForm = new FormGroup ({
        student_identity_no: new FormControl(null, Validators.required),
        cid: new FormControl(null, Validators.required),
        first_name: new FormControl(null, Validators.required),
        middle_name: new FormControl(null, Validators.required),
        last_name: new FormControl(null, Validators.required),
        dob: new FormControl(null, Validators.required),
        pervious_qualification: new FormControl(null, Validators.required),
        father_name: new FormControl(null, Validators.required),
        father_occupation: new FormControl(null, Validators.required),
        mother_name: new FormControl(null, Validators.required),
        mother_occupation: new FormControl(null, Validators.required),
        village: new FormControl(null, Validators.required),
        gewog: new FormControl(null, Validators.required),
        dzongkhag: new FormControl(null, Validators.required),
      })

    if(this.data.isEdit){
      this.getData();
      console.log(this.data, "data from modalCOntroller");
    }

  }
  onSubmit(){
    if(this.data.isEdit){
      console.log(this.data.isEdit);

      this.APISERVICE.updateSPD(this.data.selectedData.id,this.registrationForm.value).subscribe((result)=>{
          console.log(result ,"edit");
        });
    }
    else{
      console.log(this.registrationForm.value, "data from Form");
      this.APISERVICE.createStudentDetials(this.registrationForm.value).subscribe((result)=>{
        console.log(result, this.registrationForm.value.enroll_no);
      });
    }
    this.dialogRef.close(this.registrationForm.value)
  };


  getData(){
    this.registrationForm.patchValue({
      enroll_no: this.data.selectedData.enroll_no,
      cid: this.data.selectedData.cid,
      first_name: this.data.selectedData.first_name,
      middle_name: this.data.selectedData.middle_name,
      last_name: this.data.selectedData.last_name,
      dob: this.data.selectedData.dob,
      pervious_qualification: this.data.selectedData.pervious_qualification,
      father_name: this.data.selectedData.father_name,
      father_occupation: this.data.selectedData.father_occupation,
      mother_name: this.data.selectedData.mother_name,
      mother_occupation: this.data.selectedData.mother_occupation,
      village: this.data.selectedData.village,
      gewog: this.data.selectedData.gewog,
      dzongkhag: this.data.selectedData.dzongkhag,

    })

  }

}
