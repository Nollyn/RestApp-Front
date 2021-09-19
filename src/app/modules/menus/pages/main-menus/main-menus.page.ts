import { Component, OnInit } from '@angular/core';
import { MenusService } from '@app/core/services/menus.service';
import { MenusModel } from '@app/models/menus.model';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-menus',
  templateUrl: './main-menus.page.html',
  styleUrls: ['./main-menus.page.css']
})
export class MainMenusPage implements OnInit {

  menus$: Observable<MenusModel[]>;

  constructor(
    private menusService: MenusService,
    private router:Router
  ) { }

  ngOnInit() {
    this.menus$ = this.menusService.getAll();
  }

  newHandler() {
    this.router.navigate(['menus/new']);
  }
  editHandler(event: any) {
    this.router.navigate(['menus/edit', event.id]);
  }

  deleteHandler(event: any) {
    console.log('MainCategoriesPage::deleteHandler', event);
  }
}
