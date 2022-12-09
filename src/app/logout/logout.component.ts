import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit,OnDestroy {


  constructor(private formBuilder:FormBuilder,private formCon:FormControl) { }

  ngOnInit(): void {
    this.formBuilder.group({});
  }

  ngOnDestroy(): void{

  }

}
