import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
export interface navData{
  routerLink:string,
  icon:string,
  label:string
}
interface sideNavToggle{
  screenWidth:number;
  collapsed:boolean
}
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  showToggle: string;
  mode: string;
  openSidenav:boolean;
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);

  @ViewChild('sidenav') matSidenav: ElementRef;



 sideBarHide:boolean

  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
  ];



  @Output() onToggleSideNav: EventEmitter<sideNavToggle> = new EventEmitter();
  screenWidth = 0;
  // @HostListener('window:resize', ['$event'])
  // onResize(event:any){
  //   this.screenWidth = window.innerWidth;
  //   if(this.screenWidth <= 768 ){
  //     this.collapsed =false;
  //     this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});
  //   }
  // }
  // @HostListener('window:resize', ['$event']) resize(event:any){
  //   this.screenWidth = window.innerWidth;
  //   if(this.screenWidth <= 813 ){
  //     this.isLoad = false;
  //   }
  //   else {
  //     this.isLoad = true;
  //   }
  // }
  showMore:boolean=true

  collapsed = true;
  // navData:navData[]=[
  //   {routerLink:'',icon:'fal fa-home',label:'home'},]
    opened=true;
//   title = 'zhungDratshang';
  app:any[]=[
  {img:'https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg',name:'Search'},
  {img:'https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q',name:'Map'},
  {img:'https://img.freepik.com/premium-vector/google-play-logo_578229-280.jpg?w=2000',name:'Play'},
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

isLoad:boolean = true;

constructor(private service:ServiceService) { }

  ngOnInit() {
    // this.toggleCollapse()
    this.onSwitch()
    console.log(this.sideBarHide);
    this.service.bSubject.subscribe((d) => {
      this.sideBarHide = d;
      console.log(d);
      
    })
    this.screenWidth = window.innerWidth;  
    console.log(this.screenWidth, "width");
    this.getScreenWidth().subscribe(width => {
      if (width < 640) {
       this.showToggle = 'show';
       this.mode = 'over';
       this.sideBarHide = false;
     }
     else if (width > 640) {
       this.showToggle = 'hide';
       this.mode = 'side';
       this.sideBarHide = true;
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

  onSwitch(){
    this.showMore = !this.showMore
  }
  


}
