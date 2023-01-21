import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc-http',
  templateUrl: './poc-http.component.html',
  styleUrls: ['./poc-http.component.css']
})
export class PocHttpComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("Ng Init call");
    this.http.post("http://localhost:8085/ServletExample/school",{}).subscribe((result)=>{
      console.log(result);
  });

  }



}
