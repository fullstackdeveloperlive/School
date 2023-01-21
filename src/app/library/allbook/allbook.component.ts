import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-allbook',
  templateUrl: './allbook.component.html',
  styleUrls: ['./allbook.component.css']
})
export class AllbookComponent implements OnInit {
//trending book
 varcard1: Card =new Card("The Subtle Art of Not Giving a Fuck","../../assets/subtitle.jpg","PREVIEW");
 varcard2: Card =new Card("It end with us collen hoover","../../assets/It end with us collen hoover.jpg","JOIN WAITLIST");
 varcard3: Card =new Card("Papa rico ,Papa pobre","../../assets/papa rico.jpg","JOIN WAITLIST");
 varcard4: Card =new Card("Power","../../assets/power.jpg","Checked Out");
 varcard5: Card =new Card("The firing line","../../assets/the firing line.jpg","READ")
 varcard6: Card =new Card("The power of Positive thinking","../../assets/the_power_of_positive_thinking.jpg","READ")

 //classic book
 varcardA: Card =new Card("The Cherry rebband","../../assets/the cherry rebband.jpg","READ")
 varcardB: Card =new Card("For the temple","../../assets/for the temple.jpg","READ")
 varcardC: Card =new Card("The firing line","../../assets/the firing line.jpg","READ")
 varcardD: Card =new Card("Gottfried Keller as a democratic idealist.","../../assets/gottfired keller.jpg","READ")




 varArray:Card[]=[this.varcard1,this.varcard2,this.varcard3,this.varcard4,this.varcard5,this.varcard6];
 letArray:Card[]=[this.varcard5,this.varcardA,this.varcardB,this.varcardC,this.varcardD];

 index:number= 0;
 imageToShow:any;

 pre(){

  this.imageToShow=this.varArray[this.index]

 }

 next(){

  this.imageToShow=this.varArray[this.index];
 }






 constructor() { }

  ngOnInit(): void {
  }

}
export class Card {
  title: string;
  img:any;
  button:string;


  constructor (vartitle: string,varimg:any,varbutton:any) {
    this.title=vartitle;
    this.img=varimg;
    this.button=varbutton;
   }




}

