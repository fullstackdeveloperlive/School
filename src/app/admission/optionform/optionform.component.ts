import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-optionform',
  templateUrl: './optionform.component.html',
  styleUrls: ['./optionform.component.css']
})
export class OptionformComponent implements OnInit {

  optionFrom:FormGroup= new FormGroup({
    stdChoice1: new FormControl(""),
    divisionChoice1: new FormControl(""),
    mediumChoice1: new FormControl(""),
    stdChoice2: new FormControl(""),
    divisionChoice2: new FormControl(""),
    mediumChoice2 : new FormControl("")
  });
  constructor() { }

  ngOnInit(): void {

  }

}
