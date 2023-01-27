import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/app/api.service';
import { Organization } from 'src/app/model.ts/model';
import { OrganizationComponent } from '../organization.component';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent implements OnInit {
  ELEMENT_DATA:any[] = [];
  filteredArray:Organization[] =[];
  isEdit:boolean;
constructor(public dialogRef: MatDialogRef<OrganizationComponent>, private APISERVICE:APIService,
  @Inject(MAT_DIALOG_DATA) public data:any){}

organizationForm: FormGroup;

ngOnInit(): void {
  this.isEdit = this.data.isEdit;

  this.organizationForm = new FormGroup ({
    organization_name: new FormControl(null, Validators.required),
    org_location: new FormControl(null, Validators.required),
    org_type: new FormControl(null, Validators.required),
    org_description: new FormControl(null, Validators.required),
  });

  
  if(this.data.isEdit){
    this.getData();
    console.log(this.data, "data from modalCOntroller");
  }
};

onSubmit(){
  if(this.data.isEdit){
    console.log(this.data.isEdit);

    this.APISERVICE.updateOrg(this.data.selectedData.id,this.organizationForm.value).subscribe((result)=>{
        console.log(result ,"edit");
      });
  }
  else{
    console.log(this.organizationForm.value, "data from Form");
    this.APISERVICE.createOrg(this.organizationForm.value).subscribe((result)=>{
      console.log(result, this.organizationForm.value.enroll_no);
    });
  }
  this.dialogRef.close(this.organizationForm.value)
};

getData(){
  this.organizationForm.patchValue({
    organization_name: this.data.selectedData.organization_name,
    org_description: this.data.selectedData.org_description,
    org_location: this.data.selectedData.org_location,
    org_type: this.data.selectedData.org_type,
  })
}
}
