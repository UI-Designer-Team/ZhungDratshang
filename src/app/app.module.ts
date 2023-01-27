import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test/test.component';
import { FormComponent } from './components/form/form.component';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { NgxPrintElementModule } from 'ngx-print-element';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserComponent } from './teacher/user/user.component';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectModule} from "ngx-mat-select";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FooterComponent } from './components/footer/footer.component';
import { Form2Component } from './student/student-personal-details/STD.form/form2.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentPersonalDetailsComponent } from './student/student-personal-details/student-personal-details.component';
import { StudentAcademicDetailsComponent } from './student/student-academic-details/student-academic-details.component';
import { StudentMarkPerCourseComponent } from './student/student-mark-per-course/student-mark-per-course.component';
import { TeacherDetailsComponent } from './teacher/teacher-details/teacher-details.component';
import { TeacherDetailsFormComponent } from './teacher/teacher-details/teacher-details-form/teacher-details-form.component';
import { TeacherCourseTakenComponent } from './teacher/teacher-course-taken/teacher-course-taken.component';
import { TeacherCourseTakenFormComponent } from './teacher/teacher-course-taken/teacher-course-taken-form/teacher-course-taken-form.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserComponentStudent } from './student/user/user.component';
import { SADFormComponent } from './student/student-academic-details/sadform/sadform.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrgFormComponent } from './organization/org-form/org-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TestComponent,
    FormComponent,
    UserComponent,
    FooterComponent,
    Form2Component,
    TeacherDetailsComponent,
    StudentPersonalDetailsComponent,
    StudentAcademicDetailsComponent,
    StudentMarkPerCourseComponent,
    TeacherDetailsComponent,
    TeacherDetailsFormComponent,
    TeacherCourseTakenComponent,
    TeacherCourseTakenFormComponent,
    UserComponentStudent,
    SADFormComponent,
    OrganizationComponent,
    OrgFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPrintElementModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    NgxMatSelectModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatDialogModule,
    MatSlideToggleModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
