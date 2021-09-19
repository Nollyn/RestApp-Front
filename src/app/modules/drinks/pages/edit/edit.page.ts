import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinksService } from '@app/core/services/drinks.service';
import { DrinksModel } from '@app/models/drinks.model';
import { Observable } from 'rxjs';
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage extends BaseComponent implements OnInit {
  id: number;
  drinks$: Observable<DrinksModel>;
  constructor(
    private router: Router,
    private routerState: ActivatedRoute,
    private location: Location,
    private drinksService: DrinksService
  ) {
    super()
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = param.id;
      this.drinks$ = this.drinksService.getById(this.id);
    })
  }

  saveHandler(e: DrinksModel){
    e.id = this.id;
    this.drinksService.update(e).subscribe(response => {
        this.router.navigate(['drinks/edit', this.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
