import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDishesComponent } from './compontents/list-dishes/list-dishes.component';
import { MainDishesPage } from './pages/main-dishes/main-dishes.page';
import { DishesRoutingModule } from './dishes-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FormComponent } from './compontents/form/form.component';
import { NewPage } from './pages/new/new.page';
import { EditPage } from './pages/edit/edit.page';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ListDishesComponent,
    MainDishesPage, FormComponent, NewPage, EditPage
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class DishesModule { }
