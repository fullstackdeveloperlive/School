import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {
  color:string="orange";
  list:string[]=["A","B","C"];
  abc:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
