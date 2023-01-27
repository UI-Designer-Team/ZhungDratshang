import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/app/api.service';
import { AppComponent } from 'src/app/app.component';
import { Organization, studentDetails } from 'src/app/model.ts/model';

@Component({
  selector: 'app-sadform',
  templateUrl: './sadform.component.html',
  styleUrls: ['./sadform.component.css']
})
export class SADFormComponent implements OnInit {
  studentAcademicDetails:FormGroup;
  ELEMENT_DATA:studentDetails[]=[];
  organizationData:any[]=[];
  student_identity_no:any;

  // toppings = new FormControl('');
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor( @Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<AppComponent>, private APISERVICE:APIService) { }

  ngOnInit(): void {
    this.student_identity_no= this.data.value

    this.APISERVICE.readOrg().subscribe((data)=> {
      
      this.organizationData = data.map((data)=> {
        return data.organization_name
      })
      console.log(this.organizationData, "organizationData");
    })

    this.APISERVICE.readSPD().subscribe((result)=>{
      console.log(result);
      this.ELEMENT_DATA  =  result;
    });


    this.studentAcademicDetails = new FormGroup ({
      student_identity_no: new FormControl(this.student_identity_no, Validators.required),
      organization: new FormControl(null, Validators.required),
      batch: new FormControl(null, Validators.required),
      classs: new FormControl(null, Validators.required),
      section: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      module_1: new FormControl(null,Validators.required),
      module_2: new FormControl(null,Validators.required),
      module_3: new FormControl(null,Validators.required),
      module_4: new FormControl(null,Validators.required),
      module_5: new FormControl(null,Validators.required),
    });
  };

  onSubmit(){
    // if(this.data.isEdit){
    //   console.log(this.data.isEdit);

    //   this.APISERVICE.updateSAD(this.data.selectedData.id,this.studentAcademicDetails.value).subscribe((result)=>{
    //       console.log(result ,"edit");
    //     });
    // }
    // else
    
      console.log(this.studentAcademicDetails.value, "data from Form");
      this.APISERVICE.createStudentAcademicDetials(this.studentAcademicDetails.value).subscribe((result)=>{
        console.log(result);
      });
    
    this.dialogRef.close(this.studentAcademicDetails.value)
  };

}
