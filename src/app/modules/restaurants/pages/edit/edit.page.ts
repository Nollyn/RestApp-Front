import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '@app/core/services/restaurants.service';
import { RestaurantsModel } from '@app/models/restaurants.model';
import { Observable } from 'rxjs';
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage extends BaseComponent implements OnInit {

  id: number;
  restaurants$: Observable<RestaurantsModel>;

  constructor(
    private router: Router,
    private routerState: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private location: Location
    ) {
    super()
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = +param.id;
      this.restaurants$ = this.restaurantsService.getById(this.id);
    });
  }

  saveHandler(e: RestaurantsModel){
    e.id = this.id;
    this.restaurantsService.update(e).subscribe(response => {
        this.router.navigate(['restaurants/edit', this.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
