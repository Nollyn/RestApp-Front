import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { CategoriesModel } from "@app/models/categories.model";
import { CategoriesService } from "@app/core/services/categories.service";
import { DishesModel } from "@app/models/dishes.model";
import { DishesService } from "@app/core/services/dishes.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MenuDishesModel } from "@app/models/menu-dishes.model";

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: [ './add-dishes.component.scss' ]
})
export class AddDishesComponent implements OnInit {
  categories$: Observable<CategoriesModel[]>;
  dishes$: Observable<DishesModel[]>;

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: MenuDishesModel,
              public dialogRef: MatDialogRef<AddDishesComponent>,
              private categoryService: CategoriesService,
              private dishService: DishesService
  ) {
  }

  ngOnInit(): void {
    console.log('AddDishesComponent::ngOnInit', this.data);
    this.categories$ = this.categoryService.getAll();
    this.dishes$ = this.dishService.getAll();

    this.form = new FormGroup({
      idDish: new FormControl(this.data?.idDish, [ Validators.required ]),
      idCategory: new FormControl(this.data?.idCategory, [ Validators.required ]),
      price: new FormControl(this.data?.price ?? 0),
      id: new FormControl(this.data?.id ?? 0)
    });
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  submit(value: any) {
    this.dialogRef.close(value);
  }
}
