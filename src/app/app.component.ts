import { AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ServiceService } from './service.service';
import {MatTableDataSource} from '@angular/material/table';
import { NgxPrintElementService } from 'ngx-print-element';
import { MatPaginator } from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";

import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { MatDialog } from '@angular/material/dialog';
import * as pdfMake from 'pdfmake/build/pdfmake';

import { BehaviorSubject, Observable } from 'rxjs';
import { FormComponent } from './components/form/form.component';
import { Form2Component } from './components/form2/form2.component';
var htmlToPdfmake = require("html-to-pdfmake");
export interface app{
  img:string,
  name:string
}
interface sideNavToggle{
  screenWidth:number;
  collapsed:boolean
}
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  private screenWidth$ = new BehaviorSubject<number>
  (window.innerWidth);
  app:any[]=[
    {img:'https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg',name:'Search'},
    {img:'https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q',name:'Maps'},
    {img:'https://img.freepik.com/premium-vector/google-play-logo_578229-280.jpg?w=2000',name:'Plays'},
    {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_News_icon.svg/2503px-Google_News_icon.svg.png',name:'News'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC48UeDvz4gzkFDfPKau_-eNX9TtRY9zl9zKRAf_9VTmdNpNwt3nF9odTBJ4YZoEs-SNM&usqp=CAU',name:'Gmail'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgI6ZuEDVV8u_3UWsJPdG_1qrlcq0kCXiZVsBj2VjE3Ckvl6Dr7fnt2PSofsM6VCCmpA&usqp=CAU',name:'Meet'},
    {img:'https://play-lh.googleusercontent.com/cF_oWC9Io_I9smEBhjhUHkOO6vX5wMbZJgFpGny4MkMMtz25iIJEh2wASdbbEN7jseAx',name:'Chats'},
    {img:'https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png',name:'Contacts'},
    {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/480px-Google_Drive_logo.png',name:'Drive'},
    {img:'https://cdn.icon-icons.com/icons2/2642/PNG/512/google_calendar_logo_icon_159345.png',name:'Calender'},
    {img:'https://pngimage.net/wp-content/uploads/2018/06/google-traduttore-png-4.png',name:'Translate'},
    {img:'https://www.vhv.rs/dpng/d/129-1293032_google-photos-icon-png-transparent-png.png',name:'Photos'},
  ];
  isSideNavCollapsed = true;
  filterString = "";
  filtered;
  // collapsed:boolean;
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

  constructor( public print: NgxPrintElementService, private service:ServiceService, public dialog: MatDialog){
    this.dataSource.filterPredicate = (data:
      {name: string}, filterValue: string) =>
      data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;  
    console.log(this.screenWidth, "width");
    this.getScreenWidth().subscribe(width => {
      if (width < 640) {
        this.isSideNavCollapsed = false
     }
     else if (width > 640) {
      this.isSideNavCollapsed = true
     }
   });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
  
   toggle(){
    this.isSideNavCollapsed =! this.isSideNavCollapsed
    console.log(this.isSideNavCollapsed);
    this.service.switchStyle(this.isSideNavCollapsed);
    
   }
   applyFilter() {
    this.dataSource.filter = this.searchValue.trim().toLowerCase();
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;

}
openDialog() {
  const dialogRef = this.dialog.open(FormComponent
  , {height: '400px'}
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openDialog2() {
  const dialogRef = this.dialog.open(Form2Component);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
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
}