import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AdminComponent } from './admin/admin.component';
import { DivisionmanagmentComponent } from './admin/divisionmanagment/divisionmanagment.component';
import { EventscheduleComponent } from './admin/eventschedule/eventschedule.component';
import { ExamscheduleComponent } from './admin/examschedule/examschedule.component';
import { LeaveapplicationComponent } from './admin/leaveapplication/leaveapplication.component';
import { StaffmanagementComponent } from './admin/staffmanagement/staffmanagement.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionformComponent } from './admission/admissionform/admissionform.component';
import { AdmissionpayComponent } from './admission/admissionpay/admissionpay.component';
import { OptionformComponent } from './admission/optionform/optionform.component';
import { AllexamComponent } from './exam/allexam/allexam.component';
import { ExamComponent } from './exam/exam.component';
import { StartexamComponent } from './exam/startexam/startexam.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import { LabroryComponent } from './labrory/labrory.component';
import { LadndingpageComponent } from './ladndingpage/ladndingpage.component';
import { AllbookComponent } from './library/allbook/allbook.component';
import { AllocatedbookComponent } from './library/allocatedbook/allocatedbook.component';
import { IdcardComponent } from './library/idcard/idcard.component';
import { LinechartComponent } from './linechart/linechart.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PocHttpComponent } from './poc-http/poc-http.component';
import { RNDComponent } from './rnd/rnd.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
  {component:PocHttpComponent,path:'pochttp'},
  {component:LinechartComponent,path:'linechart'},
  {component:AddressComponent,path:'address'},
  {component:StudentDashboardComponent,path:'sd'},
  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
  {component:ForgotpasswordComponent,path:"forgotpassword"},
  {component:HomeComponent,path:"home",children:[
    {component:LadndingpageComponent,path:'landingpage'},
    {component:AdmissionComponent,path:'admission',children:[
      {component:AdmissionformComponent,path:'form'},
      {component:OptionformComponent,path:'optionform'},
      {component:AdmissionpayComponent,path:'pay'}
    ]},
    {component:ExamComponent,path:'exam',children:[
      {component:AllexamComponent,path:'allexam'},
      {component:StartexamComponent,path:'startexam'}
    ]},
    {component:LabroryComponent,path:'library',children:[
      {component:AllbookComponent,path:'allbook'},
      {component:AllocatedbookComponent,path:'allocatedbook'},
      {component:IdcardComponent,path:'idcard'},
      {component:AdmissionpayComponent,path:'pay'},
      {component:ImgSlideComponent,path:'img'}
    ]},
    {component:AdminComponent,path:'admin',children:[
      {component:StaffmanagementComponent,path:'staffmanagment'},
      {component:LeaveapplicationComponent,path:'leave'},
      {component:ExamscheduleComponent,path:'examschedule'},
      {component:EventscheduleComponent,path:'event'},
      {component:DivisionmanagmentComponent,path:'division'}
    ]}
  ]},
  {component:LogoutComponent,path:"logout"},
  {component:RNDComponent,path:'rnd'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
