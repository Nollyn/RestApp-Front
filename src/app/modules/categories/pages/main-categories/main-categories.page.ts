import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '@app/core/services/categories.service';
import { CategoriesModel } from '@app/models/categories.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.page.html',
  styleUrls: [ './main-categories.page.css' ]
})
export class MainCategoriesPage implements OnInit {

  categories$: Observable<CategoriesModel[]>;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.getAll();
  }

  newHandler() {
    this.router.navigate(['categories/new']);
  }
  editHandler(event: any) {
    this.router.navigate(['categories/edit', event.id]);
  }

  deleteHandler(event: any) {
    console.log('MainCategoriesPage::deleteHandler', event);
  }
}
