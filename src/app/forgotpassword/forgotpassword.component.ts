import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPasswordFrom:FormGroup= new FormGroup({
    eamil: new FormControl(""),
    newPassword: new FormControl("",),
    confirmPassword: new FormControl(""),
  });

  constructor(private formBulder:FormBuilder) { }

  ngOnInit(): void {
    this.forgotPasswordFrom =this.formBulder.group({
      eamil: new FormControl("",Validators.required),
      newPassword: new FormControl("",Validators.required),
      confirmPassword: new FormControl("",Validators.required),
    });
  }

}
