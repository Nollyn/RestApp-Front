import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MenusModel} from '@app/models/menus.model';
import {MenusService} from '@app/core/services/menus.service';
import {Location} from '@angular/common';
import {CategoriesService} from '@app/core/services/categories.service';
import {DishesService} from '@app/core/services/dishes.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {CategoriesModel} from '@app/models/categories.model';
import {DishesModel} from '@app/models/dishes.model';
import {BaseComponent} from '@app/core/base/base.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage extends BaseComponent implements OnInit {
  loadedData$: Observable<boolean>;
  menus: MenusModel;
  categories: CategoriesModel[];
  dishes: DishesModel[];

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private dishServices: DishesService,
    private menusService: MenusService,
    private location: Location
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadedData$ = this.categoriesService.getAll().pipe(map(arr => {
      this.menus = new MenusModel();
      this.categories = arr;
      this.dishServices.getAll().subscribe(dishes => {
        this.dishes = dishes;
      });
      return true;
    }));
  }

  saveHandler(e: MenusModel) {
    this.menusService.insert(e).subscribe(response => {
        this.router.navigate(['menus/edit', response.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler() {
    this.location.back();
  }
}
