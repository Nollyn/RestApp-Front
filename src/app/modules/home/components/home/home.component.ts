import { Component, Input, OnInit } from '@angular/core';
import { MenusModel } from "@app/models/menus.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

@Input() menus: MenusModel[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
