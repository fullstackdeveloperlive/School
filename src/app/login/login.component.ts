import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup= new FormGroup({
    email : new FormControl(""),
    password: new FormControl(""),
    rememberMe:new FormControl("")
  });

  constructor(private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group({
      email : new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      rememberMe:new FormControl("",[Validators.required])
  });
  }
  onSubmit():void{

  }
}
