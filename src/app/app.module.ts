import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RNDComponent } from './rnd/rnd.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LeftPannelComponent } from './left-pannel/left-pannel.component';
import { BodyComponent } from './body/body.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { AdmissionMenuComponent } from './admission-menu/admission-menu.component';
import { ExamMenuComponent } from './exam-menu/exam-menu.component';
import { AdmissionComponent } from './admission/admission.component';
import { ExamComponent } from './exam/exam.component';
import { LabroryMenuComponent } from './labrory-menu/labrory-menu.component';
import { LabroryComponent } from './labrory/labrory.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdmissionformComponent } from './admission/admissionform/admissionform.component';
import { OptionformComponent } from './admission/optionform/optionform.component';
import { AdmissionpayComponent } from './admission/admissionpay/admissionpay.component';
import { AllexamComponent } from './exam/allexam/allexam.component';
import { StartexamComponent } from './exam/startexam/startexam.component';
import { AllbookComponent } from './library/allbook/allbook.component';
import { AllocatedbookComponent } from './library/allocatedbook/allocatedbook.component';
import { IdcardComponent } from './library/idcard/idcard.component';
import { StaffmanagementComponent } from './admin/staffmanagement/staffmanagement.component';
import { LeaveapplicationComponent } from './admin/leaveapplication/leaveapplication.component';
import { ExamscheduleComponent } from './admin/examschedule/examschedule.component';
import { EventscheduleComponent } from './admin/eventschedule/eventschedule.component';
import { DivisionmanagmentComponent } from './admin/divisionmanagment/divisionmanagment.component';
import { LadndingpageComponent } from './ladndingpage/ladndingpage.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddressComponent } from './address/address.component';
import { MatSelectModule } from '@angular/material/select';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { SpanElementDirective } from './span-element.directive';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PocHttpComponent } from './poc-http/poc-http.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    HomeComponent,
    LogoutComponent,
    RNDComponent,
    HeaderComponent,
    LeftPannelComponent,
    BodyComponent,
    FooterComponent,
    AdmissionMenuComponent,
    ExamMenuComponent,
    AdmissionComponent,
    ExamComponent,
    LabroryMenuComponent,
    LabroryComponent,
    AdminComponent,
    AdminMenuComponent,
    AdmissionformComponent,
    OptionformComponent,
    AdmissionpayComponent,
    AllexamComponent,
    StartexamComponent,
    AllbookComponent,
    AllocatedbookComponent,
    IdcardComponent,
    StaffmanagementComponent,
    LeaveapplicationComponent,
    ExamscheduleComponent,
    EventscheduleComponent,
    DivisionmanagmentComponent,
    LadndingpageComponent,
    AddressComponent,
    StudentDashboardComponent,
    SpanElementDirective,
    ImgSlideComponent,
    LinechartComponent,
    PocHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
