import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDrinksComponent } from './compontents/list-drinks/list-drinks.component';
import { MainDrinksPage } from './pages/main-drinks/main-drinks.page';
import { DrinksRoutingModule } from './drinks-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FormComponent } from './compontents/form/form.component';
import { NewPage } from './pages/new/new.page';
import { EditPage } from './pages/edit/edit.page';

@NgModule({
  declarations: [ListDrinksComponent, MainDrinksPage, FormComponent, NewPage, EditPage],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    SharedModule
  ]
})
export class DrinksModule { }
