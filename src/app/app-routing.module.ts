import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { BillsComponent } from './bills/bills.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:'',component:FormsComponent},
  {path:'login',component:LoginFormComponent},
  {path:'bills',component:BillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
