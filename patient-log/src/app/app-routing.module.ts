import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientsScreenComponent } from './patients-screen/patients-screen.component';

const routes: Routes = [
  { path:'', redirectTo:"/home", pathMatch:'full'},
  { path: "home", component: HomepageComponent},
  { path: "patients", component : PatientsScreenComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
