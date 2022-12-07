import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  singupFrom:FormGroup= new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    conformPassword: new FormControl()
  });
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.singupFrom=this.formBuilder.group({
      firstName : new FormControl("",[Validators.required,Validators.min(4)]),
      lastName : new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
      conformPassword: new FormControl('',Validators.required)
    })
  }

}
