import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {

 varArray:string[]=["../../assets/papa rico.jpg",
 "../../assets/power.jpg",
 "../../assets/subtitle.jpg",
 "../../assets/gottfired keller.jpg",
 "../../assets/the_power_of_positive_thinking.jpg",
"../../assets/how_to_win_people.jpg",
"../../assets/atomic_habit.jpg",
"../../assets/harry_potter.jpg",
"../../assets/the_laws_of_human_nature.jpg"

];


 imgDisplayArray:string[]=["../../assets/papa rico.jpg",
 "../../assets/power.jpg",
 "../../assets/subtitle.jpg",
 "../../assets/gottfired keller.jpg"];



 index=0;
 imgToShow: any;


 pre(){
  if( this.index<0){
    this.index=8;
  }
  this.imgDisplayArray.shift();
  this.imgDisplayArray.push(this.varArray[this.index]);
  this.index--;
 }



 next(){
  if( this.index>8){
    this.index=0;
  }
  this.imgDisplayArray.pop();
  this.imgDisplayArray.unshift(this.varArray[this.index]);
  this.index++;

 }


  constructor() { }

  ngOnInit(): void {
  }

}
