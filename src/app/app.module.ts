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
    AdminMenuComponent
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
