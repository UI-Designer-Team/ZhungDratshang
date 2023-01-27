import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './teacher/user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'dashBoard', pathMatch:'full'},
  {path:'dashBoard', component:AppComponent},
  {path:'teacherProfile/:id',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
