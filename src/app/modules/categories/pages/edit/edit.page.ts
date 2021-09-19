import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '@app/core/services/categories.service';
import { CategoriesModel } from '@app/models/categories.model';
import { Observable } from 'rxjs';
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage extends BaseComponent implements OnInit {
  id: number;
  categories$: Observable<CategoriesModel>;
  constructor(
    private router: Router,
    private routerState: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location
  ) {
    super();
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = +param.id;
      this.categories$ = this.categoriesService.getById(this.id);
    })
  }

  saveHandler(e: CategoriesModel){
    e.id = this.id;
    this.categoriesService.update(e).subscribe(response => {
        this.router.navigate(['categories/edit', this.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
