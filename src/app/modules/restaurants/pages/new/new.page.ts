import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '@app/core/services/restaurants.service';
import { RestaurantsModel } from '@app/models/restaurants.model';
import { Observable, of } from 'rxjs';
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage extends BaseComponent implements OnInit {
  restaurants$: Observable<RestaurantsModel>;

  constructor(
    private router: Router,
    private restaurantsService: RestaurantsService,
    private location: Location
  ) {
    super()
  }

  ngOnInit(): void {
    this.restaurants$ = of(new RestaurantsModel());
  }

  saveHandler(e: RestaurantsModel){
    this.restaurantsService.insert(e).subscribe(response => {
        this.router.navigate(['restaurants/edit', response.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
