import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantsComponent } from './compontents/list-restaurants/list-restaurants.component';
import { MainPage } from './pages/main/main.page';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FormComponent } from './compontents/form/form.component';
import { NewPage } from './pages/new/new.page';
import { EditPage } from './pages/edit/edit.page';

@NgModule({
  declarations: [ListRestaurantsComponent, MainPage, FormComponent, EditPage, NewPage],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    SharedModule
  ]
})
export class RestaurantsModule { }
