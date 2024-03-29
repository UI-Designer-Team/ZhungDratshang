import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Bank {
  id: string;
  name: string;
}
export const BANKS: Bank[] = [
  {name: 'Bank A (Switzerland)', id: 'A'},
  {name: 'Bank B (Switzerland)', id: 'B'},
  {name: 'Bank C (France)', id: 'C'},
  {name: 'Bank D (France)', id: 'D'},
  {name: 'Bank E (France)', id: 'E'},
  {name: 'Bank F (Italy)', id: 'F'},
  {name: 'Bank G (Italy)', id: 'G'},
  {name: 'Bank H (Italy)', id: 'H'},
  {name: 'Bank I (Italy)', id: 'I'},
  {name: 'Bank J (Italy)', id: 'J'},
  {name: 'Bank Kolombia (United States of America)', id: 'K'},
  {name: 'Bank L (Germany)', id: 'L'},
  {name: 'Bank M (Germany)', id: 'M'},
  {name: 'Bank N (Germany)', id: 'N'},
  {name: 'Bank O (Germany)', id: 'O'},
  {name: 'Bank P (Germany)', id: 'P'},
  {name: 'Bank Q (Germany)', id: 'Q'},
  {name: 'Bank R (Germany)', id: 'R'}
];

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor() { }
  bSubject = new BehaviorSubject<boolean>(false);
  switchStyle(collapsed:boolean){
    this.bSubject.next(collapsed);
  }
  contentSubject = new BehaviorSubject<string>('student');
  changeContent(data:string){
    this.contentSubject.next(data);
  }

  teacherUserSubject = new BehaviorSubject<string>(null);
  navigate(id:string){
    this.teacherUserSubject.next(id)
  };

  studentUserSubject = new BehaviorSubject<number>(null);s
  navigatestudent(id:number){
    this.studentUserSubject.next(id)
    console.log(id);

  }
}
