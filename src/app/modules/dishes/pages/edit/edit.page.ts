import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { DishesModel } from "@app/models/dishes.model";
import { DishesService } from "@app/core/services/dishes.service";
import { BaseComponent } from "@app/core/base/base.component";
import { OptionsModel } from "@app/models/options.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage extends BaseComponent implements OnInit {
  id: number;
  dishes$: Observable<DishesModel>;

  constructor(
    private router: Router,
    private routerState: ActivatedRoute,
    private location: Location,
    private dishesService: DishesService
  ) {
    super();
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = +param.id;
      this.dishes$ = this.dishesService.getById(this.id);
    });
  }

  saveHandler(e: DishesModel) {
    e.id = this.id;
    this.dishesService.update(e).subscribe(response => {
        this.router.navigate(['dishes/edit', this.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler() {
    this.location.back();
  }
}
