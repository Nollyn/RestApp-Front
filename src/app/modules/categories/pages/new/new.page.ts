import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '@app/core/services/categories.service';
import { CategoriesModel } from '@app/models/categories.model';
import { Observable, of } from 'rxjs';
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage extends BaseComponent implements OnInit {
  categories$: Observable<CategoriesModel>;
  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private location: Location
  ) {
    super();
  }

  ngOnInit(): void {
    this.categories$ = of(new CategoriesModel());
  }

  saveHandler(e: CategoriesModel){
    this.categoriesService.insert(e).subscribe(response => {
        this.router.navigate(['categories/edit', response.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
