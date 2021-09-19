import { Component, OnInit } from '@angular/core';
import { DishesService } from '@app/core/services/dishes.service';
import { DishesModel } from '@app/models/dishes.model';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-dishes',
  templateUrl: './main-dishes.page.html',
  styleUrls: ['./main-dishes.page.css']
})
export class MainDishesPage implements OnInit {

  dishes$: Observable<DishesModel[]>;

  constructor(
    private dishesService: DishesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dishes$ = this.dishesService.getAll();
  }

  newHandler() {
    this.router.navigate(['dishes/new']);
  }
  editHandler(event: any) {
    this.router.navigate(['dishes/edit', event.id]);
  }

  deleteHandler(event: any) {
    console.log('MainCategoriesPage::deleteHandler', event);
  }
}
