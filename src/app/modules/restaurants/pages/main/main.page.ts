import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '@app/core/services/restaurants.service';
import { RestaurantsModel } from '@app/models/restaurants.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-restaurants',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css']
})
export class MainPage implements OnInit {

  restaurants$: Observable<RestaurantsModel[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.restaurants$ = this.restaurantsService.getAll();
  }

  newHandler() {
    this.router.navigate(['restaurants/new']);
  }
  editHandler(event: any) {
    this.router.navigate(['restaurants/edit', event.id]);
  }

  deleteHandler(event: any) {
    console.log('MainCategoriesPage::deleteHandler', event);
  }
}
