import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import * as pdfMake from 'pdfmake/build/pdfmake';
import { teacherCourseTaken, teacherDetails } from 'src/app/model.ts/model';
import { APIService } from 'src/app/api.service';
import { SADFormComponent } from './sadform/sadform.component';

var htmlToPdfmake = require("html-to-pdfmake");
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-student-academic-details',
  templateUrl: './student-academic-details.component.html',
  styleUrls: ['./student-academic-details.component.css']
})
export class StudentAcademicDetailsComponent implements OnInit {
  searchValue:any;
  ELEMENT_DATA:teacherCourseTaken[]=[]
  ELEMENT_DATA2:teacherDetails[]=[]
  array:any;
  teacherId:any;
  constructor( public dialog: MatDialog,
    private APISERVICE:APIService) {
    this.dataSource.filterPredicate = (data:
      {name: string}, filterValue: string) =>
      data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data:
      {name: string}, filterValue: string) =>
      data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
    this.APISERVICE.readTCT().subscribe((result)=>{
      console.log(result);
      this.ELEMENT_DATA  =  result;
    });
     this.APISERVICE.readTPD().subscribe((result)=>{
        console.log(result);
        this.ELEMENT_DATA2  =  result;
        console.log(this.array, this.teacherId);

      for(let data1 of this.ELEMENT_DATA){
        for(let data2 of this.ELEMENT_DATA2){
          if(data1.teacher == data2.id){
            data1.teacher = data2.first_name;
            console.log(data1, "ss");

          }
        }
      }
      });


  }
  openDialog2() {
    const dialogRef = this.dialog.open(SADFormComponent);

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
        this.APISERVICE.deleteTCT(id).subscribe((result)=>{
          console.log(result);
        });
      }
      updateTCT(data:any){

      }
      viewProfile(value:any){

      }
}
