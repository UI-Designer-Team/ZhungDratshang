import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from 'src/app/components/form/form.component';
import { Form2Component } from 'src/app/student/student-personal-details/STD.form/form2.component';
import {MatTableDataSource} from '@angular/material/table';
import { NgxPrintElementService } from 'ngx-print-element';
import { MatPaginator } from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";

import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { studentDetails, teacherDetails } from 'src/app/model.ts/model';
import { APIService } from 'src/app/api.service';
import { TeacherDetailsFormComponent } from './teacher-details-form/teacher-details-form.component';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { TeacherCourseTakenFormComponent } from '../teacher-course-taken/teacher-course-taken-form/teacher-course-taken-form.component';
var htmlToPdfmake = require("html-to-pdfmake");
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  searchValue:any;
  showMore:boolean= false
  ELEMENT_DATA:teacherDetails[]=[]
  constructor( public dialog: MatDialog,
    private APISERVICE:APIService,
    private service:ServiceService) {
    this.dataSource.filterPredicate = (data:
      {name: string}, filterValue: string) =>
      data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
  }
  show(){
    this.showMore =! this.showMore
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data:
      {name: string}, filterValue: string) =>
      data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
    this.APISERVICE.readTPD().subscribe((result)=>{
      console.log(result);
      this.ELEMENT_DATA  =  result;
    })
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(FormComponent
  //   , {height: '400px'}
  //   );

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  AddTD() {
    const dialogRef = this.dialog.open(TeacherDetailsFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "data recieved from dialog");
    });
  }

    // below code is for saving in excel
    @ViewChild('TABLE') table:any= ElementRef;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSources = this.ELEMENT_DATA;
    ExportTOExcel()
    {
      const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, 'DMIS TABLE.xlsx');
    }
    // below code is for saving in pdf
    title = 'htmltopdf';
    @ViewChild('pdfTable') pdfTable:any= ElementRef;
    public downloadAsPDF() {
      const doc = new jsPDF();
      const pdfTable = this.pdfTable.nativeElement;
      var html = htmlToPdfmake(pdfTable.innerHTML);
      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }
      // below code is for printing
      dataSource = new MatTableDataSource<Element>();

      @ViewChild(MatPaginator) paginator:any= MatPaginator;

      public config = {
        printMode: 'template-popup',
        // popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
        // pageTitle: 'Hello World',
        // templateString: '<header>I\'m part of the template header</header>{{printBody}}<footer>I\'m part of the template footer</footer>',
        // stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
        // styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; color: red }', 'header, table, footer { margin: auto; text-align: center; }']
      }
      applyFilter() {
        this.dataSource.filter = this.searchValue.trim().toLowerCase();
      }
      onDelete(id:any){
        this.APISERVICE.deleteTPD(id).subscribe((result)=>{
          console.log(result);
        });
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
      viewProfile(id:string){
        this.firstTab(3)
        console.log(id);
        this.service.navigate(id)
      }
      updateTPD(data:any){
        console.log("Update", data.value);
        const dialogRef = this.dialog.open(TeacherDetailsFormComponent,{
          data: {selectedData: data, isEdit:true},
        });

        // id.value.id = this.ELEMENT_DATA['id'];
        // this.APISERVICE.updateSPD(id.value).subscribe((result)=>{
        //   console.log(result);
        // });
      }



}
