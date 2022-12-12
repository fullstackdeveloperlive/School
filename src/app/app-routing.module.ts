import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmissionComponent } from './admission/admission.component';
import { ExamComponent } from './exam/exam.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LabroryComponent } from './labrory/labrory.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RNDComponent } from './rnd/rnd.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
  {component:ForgotpasswordComponent,path:"forgotpassword"},
  {component:HomeComponent,path:"home",children:[
    {component:AdmissionComponent,path:'admission'},
    {component:ExamComponent,path:'exam'},
    {component:LabroryComponent,path:'labrory'},
    {component:AdminComponent,path:'admin'}
  ]},
  {component:LogoutComponent,path:"logout"},
  {component:RNDComponent,path:'rnd'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
