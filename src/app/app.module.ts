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
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserComponent } from './components/user/user.component';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectModule} from "ngx-mat-select";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
 
    TestComponent,
    FormComponent,
    UserComponent,
    FooterComponent
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
    MatAutocompleteModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
