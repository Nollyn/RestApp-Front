import { Component, OnInit } from '@angular/core';
import { MenusService } from '@app/core/services/menus.service';
import { MenusModel } from '@app/models/menus.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {

  menus$: Observable<MenusModel>;
  id: number;

  constructor(
    private menusService: MenusService,
    private router: Router,
    private routerState: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = +param.id;
      this.menus$ = this.menusService.getById(this.id);
    })
  }

}
