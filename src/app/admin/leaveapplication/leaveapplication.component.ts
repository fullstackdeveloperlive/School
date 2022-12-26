import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leaveapplication',
  templateUrl: './leaveapplication.component.html',
  styleUrls: ['./leaveapplication.component.css']
})
export class LeaveapplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.leaveForm = new FormGroup({
      start: new FormControl(null),
      end: new FormControl(null),
      leaveType: new FormControl("Sick Leave"),
      leaveDescription: new FormControl()
    });
  }
  leaveForm = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
    leaveType: new FormControl("Sick Leave"),
    leaveDescription: new FormControl()
  });
}
