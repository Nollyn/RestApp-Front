import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MenusModel} from '@app/models/menus.model';
import {MenusService} from '@app/core/services/menus.service';
import {CategoriesModel} from '@app/models/categories.model';
import {DishesModel} from '@app/models/dishes.model';
import {CategoriesService} from '@app/core/services/categories.service';
import {DishesService} from '@app/core/services/dishes.service';
import {BaseComponent} from '@app/core/base/base.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage extends BaseComponent implements OnInit {
  id: number;
  menus$: Observable<MenusModel>;
  categories: CategoriesModel[];
  dishes: DishesModel[];

  constructor(
    private routerState: ActivatedRoute,
    private location: Location,
    private categoriesService: CategoriesService,
    private dishServices: DishesService,
    private menusService: MenusService
  ) {
    super();
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = +param.id;
      this.menus$ = this.menusService.getById(this.id);
      this.dishServices.getAll().subscribe(dishes => this.dishes = dishes);
      this.categoriesService.getAll().subscribe(arr => this.categories = arr);
    });
  }

  saveHandler(e: MenusModel) {
    e.id = this.id;
    this.menusService.update(e).subscribe(response => {
      if (response) {
        this.success();
      } else {
        this.error();
      }
    }, () => this.error());
  }

  cancelHandler() {
    this.location.back();
  }

}
