import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MenusModel} from '@app/models/menus.model';
import {Observable} from 'rxjs';
import {MenusService} from '@app/core/services/menus.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AddDishesComponent} from '@app/modules/menus/compontents/add-dishes/add-dishes.component';
import {CategoriesModel} from '@app/models/categories.model';
import {DishesModel} from '@app/models/dishes.model';
import { MenuDishesModel } from "@app/models/menu-dishes.model";

@Component({
  selector: 'new-menu-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() menu: MenusModel;
  @Input() categories: CategoriesModel[];
  @Input() dishes: DishesModel[];
  @Input() menuParent: MenusModel[];

  @Output() saveForm = new EventEmitter<MenusModel>();
  @Output() cancelForm = new EventEmitter();

  menuParent$: Observable<MenusModel[]>;

  form: FormGroup;

  constructor(
    private menusService: MenusService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.menu?.name, [Validators.required]),
      date: new FormControl(this.menu?.date, [Validators.required]),
      dayMenu: new FormControl(this.menu?.dayMenu ?? false, [Validators.required]),
      description: new FormControl(this.menu?.description, [Validators.required]),
      idMenuParent: new FormControl(this.menu?.idMenuParent),
    });
    this.menuParent$ = this.menusService.getAll();
  }

  submit(value: MenusModel
  ) {
    if (this.form.invalid) {
      alert('Some fields require yor attention');
      return;
    }
    value.dishes = this.menu.dishes;
    this.saveForm.emit(value);
  }

  clickHandler() {
    this.cancelForm.emit();
  }

  newDishHandler() {
    const dialogRef = this.openDialog(null);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      console.log('The dialog was closed', result);
      this.menu.dishes.push(result);
      console.log('The dialog was closed', this.menu);
    });
  }

  editDishHandler(dish: MenuDishesModel, index: number) {
    const dialogRef = this.openDialog(dish);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      console.log('The dialog was closed', result);
      this.menu.dishes[index] = result;
      console.log('The dialog was closed', this.menu);
    });
  }

  openDialog(data: MenuDishesModel | null): MatDialogRef<AddDishesComponent> {
    return this.dialog.open(AddDishesComponent, {
      width: '800',
      data: data
    });
  }

  removeMenuHandler(dish: MenuDishesModel, index: number) {
    alert(`are you sure to remove dish: ${dish.price} `);
    this.menu.dishes.splice(index, 1);
  }
}
