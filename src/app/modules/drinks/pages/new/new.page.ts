import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DrinksService } from '@app/core/services/drinks.service';
import { DrinksModel } from '@app/models/drinks.model';
import { Observable, of } from 'rxjs';
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage extends BaseComponent implements OnInit {
  drinks$: Observable<DrinksModel>;
  constructor(
    private router: Router,
    private drinksService: DrinksService,
    private location: Location
  ) {
    super()
  }

  ngOnInit(): void {
    this.drinks$ = of(new DrinksModel());
  }

  saveHandler(e: DrinksModel){
    this.drinksService.insert(e).subscribe(response => {
        this.router.navigate(['drinks/edit', response.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
