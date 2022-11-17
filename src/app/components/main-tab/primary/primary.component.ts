import { AfterViewInit, Component, Input, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { NgxPrintElementService } from 'ngx-print-element';
import { MatPaginator } from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { ServiceService } from 'src/app/service.service';
import { FormComponent } from '../../form/form.component';
import { MatDialog } from '@angular/material/dialog';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

var htmlToPdfmake = require("html-to-pdfmake");

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit, AfterViewInit {
  filterString = "";
  filtered;
  collapsed:boolean;
  searchValue:any;
  screenWidth = 0;

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

  // below code is for saving in excel
  @ViewChild('TABLE') table:any= ElementRef;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSources = ELEMENT_DATA;

ExportTOExcel()
{
  const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
  /* save to file */
  XLSX.writeFile(wb, 'DMIS TABLE.xlsx');
  
}
   
  // below code is for printing
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any= MatPaginator;

  public config = {
    printMode: 'template-popup',
    // popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    // pageTitle: 'Hello World',
    // templateString: '<header>I\'m part of the template header</header>{{printBody}}<footer>I\'m part of the template footer</footer>',
    // stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    // styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; color: red }', 'header, table, footer { margin: auto; text-align: center; }']
  }



  constructor(public print: NgxPrintElementService, private service:ServiceService, public dialog: MatDialog) { 
    this.dataSource.filterPredicate = (data:
      {name: string}, filterValue: string) =>
      data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
  }
  
  ngOnInit(){
    
    this.service.bSubject.subscribe((d) => {
      this.collapsed = d;
      console.log(d);
      
    })
    this.screenWidth = window.innerWidth;  
    console.log(this.screenWidth, "width");
  }
  
  
  applyFilter() {
      this.dataSource.filter = this.searchValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog() {
    this.dialog.open(FormComponent);
  }

}