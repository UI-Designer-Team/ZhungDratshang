import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Batch, org, Organization, Standard, studentAcademicDetails, studentDetails, StudentMark, StudentResult, teacherCourseTaken, teacherDetails } from './model.ts/model';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  API_SERVER = "http://localhost:3000";
  constructor(private httpClient:HttpClient) { }

          // student_Personal_Details CRUD
          public createStudentDetials(details: studentDetails){
            return this.httpClient.post<studentDetails>(`${this.API_SERVER}/SPD/create`, details);
          }
          public deleteSPD(id: number){
            return this.httpClient.delete(`${this.API_SERVER}/SPD/${id}/delete`);
          }
          public readSPD(){
            return this.httpClient.get<studentDetails[]>(`${this.API_SERVER}/SPD`);
          }

          public updateSPD(id:any,details: studentDetails){
            console.log(details.id);

            return this.httpClient.put<studentDetails>(`${this.API_SERVER}/SPD/${id}/update`, details);
          }

          //student_academic_details CRUD
          public createStudentAcademicDetials(details: studentAcademicDetails){
            return this.httpClient.post<studentAcademicDetails>(`${this.API_SERVER}/SAD/create`, details);
          }
          public deleteSAD(id: number){
            return this.httpClient.delete(`${this.API_SERVER}/SAD/${id}/delete`);
          }
          public readSAD(){
            return this.httpClient.get<studentAcademicDetails[]>(`${this.API_SERVER}/SAD`);
          }

          public updateSAD(id:any,details: studentAcademicDetails){
            console.log(details.id);

            return this.httpClient.put<studentAcademicDetails>(`${this.API_SERVER}/SAD/${id}/update`, details);
          }

          // teacher_details CRUD
          public createTeacherDetials(details: teacherDetails){
            return this.httpClient.post<teacherDetails>(`${this.API_SERVER}/TD/create`, details);
          }
          public deleteTPD(id: number){
            return this.httpClient.delete(`${this.API_SERVER}/TD/${id}/delete`);
          }
          public readTPD(){
            return this.httpClient.get<teacherDetails[]>(`${this.API_SERVER}/TD`);
          }
          public updateTPD(id:any,details: teacherDetails){
            console.log(details.id);

            return this.httpClient.put<teacherDetails>(`${this.API_SERVER}/TD/${id}/update`, details);
          }

          // teacher_Course_Taken CRUD
          public createTeacherCT(details: teacherCourseTaken, id:any){
            return this.httpClient.post<teacherCourseTaken>(`${this.API_SERVER}/TCT/create`, details, id);
          }
          public deleteTCT(id: number){
            return this.httpClient.delete(`${this.API_SERVER}/TCT/${id}/delete`);
          }
          public readTCT(){
            return this.httpClient.get<teacherCourseTaken[]>(`${this.API_SERVER}/TCT`);
          }
          public sendingFK(id:any){
            return this.httpClient.get(`${this.API_SERVER}/TCT/${id}`)
          }

          // Organization CRUD
          public createOrg(details: Organization){
            return this.httpClient.post<Organization>(`${this.API_SERVER}/organization/create`, details);
          }
          public deleteOrg(id: number){
            return this.httpClient.delete(`${this.API_SERVER}/organization/${id}/delete`);
          }
          public readOrg(){
            return this.httpClient.get<Organization[]>(`${this.API_SERVER}/organization`);
          }

          public updateOrg(id:any,details: Organization){
            console.log(details.id);
            return this.httpClient.put<Organization>(`${this.API_SERVER}/organization/${id}/update`, details);
          }

          // batch CRUD
          public createbatchDetail(details: Batch){
            return this.httpClient.post<Batch>(`${this.API_SERVER}/batch/create`, details);
          }
          public deletebatch(id: number){
            return this.httpClient.delete(`${this.API_SERVER}/batch/${id}/delete`);
          }
          public readBatch(){
            return this.httpClient.get<Batch[]>(`${this.API_SERVER}/batch`);
          }
          public updateBatch(id:any,details: Batch){
            console.log(details.id);
            return this.httpClient.put<Batch>(`${this.API_SERVER}/batch/${id}/update`, details);
          }

          // standard CRUD
          public createStandard(details: Standard){
            return this.httpClient.post<Batch>(`${this.API_SERVER}/standard/create`, details);
          }
          public deleteStandard(id: number){
            return this.httpClient.delete(`${this.API_SERVER}/standard/${id}/delete`);
          }
          public readStandard(){
            return this.httpClient.get<Standard[]>(`${this.API_SERVER}/standard`);
          }
          public updateStandard(id:any,details: Standard){
            console.log(details.id);
            return this.httpClient.put<Standard>(`${this.API_SERVER}/standard/${id}/update`, details);
          };

            // Students marks per Course CRUD
            public createStudentMark(details: StudentMark){
              return this.httpClient.post<Batch>(`${this.API_SERVER}/SMPC/create`, details);
            }
            public deleteStudentMark(id: number){
              return this.httpClient.delete(`${this.API_SERVER}/SMPC/${id}/delete`);
            }
            public readStudentMark(){
              return this.httpClient.get<StudentMark[]>(`${this.API_SERVER}/SMPC`);
            }
            public updateStudentMark(id:any,details: StudentMark){
              console.log(details.id);
              return this.httpClient.put<StudentMark>(`${this.API_SERVER}/SMPC/${id}/update`, details);
            };

          // Result CRUD
          public createResult(details: StudentResult){
            return this.httpClient.post<StudentResult>(`${this.API_SERVER}/result/create`, details);
          }
          public deleteResult(id: number){
            return this.httpClient.delete(`${this.API_SERVER}/result/${id}/delete`);
          }
          public readResult(){
            return this.httpClient.get<StudentResult[]>(`${this.API_SERVER}/result`);
          }
          public updateResult(id:any,details: StudentResult){
            console.log(details.id);
            return this.httpClient.put<StudentResult>(`${this.API_SERVER}/result/${id}/update`, details);
          };





}
