import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

sessionValue: string="";
firstname:string="";
secondname:string="";
  constructor() { }

  ngOnInit() {

var localValue= JSON.parse(localStorage.getItem("firstName"));
this.sessionValue= sessionStorage.getItem("lastName");  
this.firstname=localValue.firstname;
this.secondname=localValue.secondname;
  }

}
