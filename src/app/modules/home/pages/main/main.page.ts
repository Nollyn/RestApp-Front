import { Component, OnInit } from '@angular/core';
import { MenusService } from "@app/core/services/menus.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { MenusModel } from "@app/models/menus.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {

  menus$: Observable<MenusModel[]>;

  constructor(
    private menusService: MenusService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menus$ = this.menusService.getAll();
  }

  selectHandler(e: any) {
    console.log(e);
    this.router.navigate(['client-menu/main', e.target.value]);
  }
}
