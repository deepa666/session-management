import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

localStorage.setItem("firstName", JSON.stringify({"firstname": "deepanshi",'secondname':"aggarwal"}));
sessionStorage.setItem("lastName", "Aggarwal");


  }

}
