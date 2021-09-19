import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { DishesModel } from "@app/models/dishes.model";
import { DishesService } from "@app/core/services/dishes.service";
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage extends BaseComponent implements OnInit {
  dishes$: Observable<DishesModel>;

  constructor(
    private router: Router,
    private  dishesService: DishesService,
    private location: Location
  ) {
    super();
  }

  ngOnInit(): void {
    this.dishes$ = of(new DishesModel())
  }

  saveHandler(e: DishesModel){
    this.dishesService.insert(e).subscribe(response => {
        this.router.navigate(['dishes/edit', response.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
