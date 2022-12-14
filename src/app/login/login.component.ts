import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';

interface UserDetails{
  firstName:string;
	lastName:string;
	email:string;
	password:string;
	conformPassword:string
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginStatus:boolean=false;

  formLogin:FormGroup= new FormGroup({
    email : new FormControl(""),
    password: new FormControl(""),
    rememberMe:new FormControl("")
  });

  constructor(private formBuilder:FormBuilder,
    private router :Router,
    private htpp:HttpClient) {

   }

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group({
      email : new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(4)]),
      rememberMe:new FormControl("",[Validators.required])
  });
  }

  submit() :void{
    console.log("Submit function call");
  }
  onSubmit():void{
      console.log("Onsubmit function call");

       if(this.formLogin.invalid){
        return;
       }
       let url="../../assets/userdetails.json";
       this.htpp.get<UserDetails[]>(url).subscribe(userDetails=>{
        console.log(userDetails);
        for(let i=0;i<userDetails.length;i++){
          if(this.formLogin.value.email==userDetails[i].email && this.formLogin.value.password==userDetails[i].password){
            this.loginStatus=false;
            this.router.navigate(["home/landingpage"]);
           }else{
            this.loginStatus=true;
           }
         }
       });


       console.log("form success");
  }
}
