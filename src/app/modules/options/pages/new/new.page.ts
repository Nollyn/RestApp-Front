import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { OptionsModel } from "@app/models/options.model";
import { OptionsService } from "@app/core/services/options.service";
import { Location } from '@angular/common';
import { RestaurantsModel } from "@app/models/restaurants.model";
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage extends BaseComponent implements OnInit {
  options$: Observable<OptionsModel>;

  constructor(
    private router: Router,
    private optionsService: OptionsService,
    private location: Location
  ) {
    super()
  }

  ngOnInit(): void {
    this.options$ = of(new OptionsModel());
  }

  saveHandler(e: OptionsModel){
    this.optionsService.insert(e).subscribe(response => {
        this.router.navigate(['options/edit', response.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
