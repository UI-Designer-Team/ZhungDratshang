import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { APIService } from 'src/app/api.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  registrationForm: FormGroup;

  constructor( public dialogRef: MatDialogRef<AppComponent>, private APISERVICE:APIService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup ({
      enroll_no: new FormControl(null, Validators.required),
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
  }
  onSubmit(){
    console.log(this.registrationForm.value, "data from Form");
    this.APISERVICE.createStudentDetials(this.registrationForm.value).subscribe((result)=>{
      console.log(result, this.registrationForm.value.enroll_no);
    });
    this.dialogRef.close(this.registrationForm.value)
  }


}
