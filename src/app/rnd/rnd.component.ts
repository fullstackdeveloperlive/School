import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
class Employee{
  empid:string;
  name:string;
  constructor(em:string,lname:string){
      this.empid=em;
      this.name=lname;
  }

}

@Component({
  selector: 'app-rnd',
  templateUrl: './rnd.component.html',
  styleUrls: ['./rnd.component.css']
})
export class RNDComponent implements OnInit {
  abc:string="Full Stack Developer";

  objEmp:Employee=new Employee("1111","A");
  objEmp1:Employee=new Employee("2222","B");
  objEmp2:Employee=new Employee("3333","C");
  objEmp3:Employee=new Employee("4444","D");

  objArray:Employee[]=[this.objEmp,this.objEmp1,this.objEmp2,this.objEmp3];
  constructor() { }

  rndForm:FormGroup= new FormGroup({

  });

  ngOnInit(): void {
  }

  sum(vara:string):void{
    console.log("Function call" +vara);
  }

}
