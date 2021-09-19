import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinksService } from '@app/core/services/drinks.service';
import { DrinksModel } from '@app/models/drinks.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-drinks',
  templateUrl: './main-drinks.page.html',
  styleUrls: ['./main-drinks.page.css']
})
export class MainDrinksPage implements OnInit {

  drinks$: Observable<DrinksModel[]>;
  constructor(
    private drinksService: DrinksService,
    private router: Router
    ) { }

  ngOnInit() {
    this.drinks$ = this.drinksService.getAll();
  }

  newHandler() {
    this.router.navigate(['drinks/new']);
  }
  editHandler(event: any) {
    this.router.navigate(['drinks/edit', event.id]);
  }
  deleteHandler(event: any) {
    console.log('MainCategoriesPage::deleteHandler', event);
  }
}
