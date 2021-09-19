import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenusPage } from './pages/main-menus/main-menus.page';
import { MenusRoutingModule } from './menus-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ListMenusComponent } from './compontents/list-menus/list-menus.component';
import { FormComponent } from './compontents/form/form.component';
import { NewPage } from "@app/modules/menus/pages/new/new.page";
import { EditPage } from "@app/modules/menus/pages/edit/edit.page";
import { AddDishesComponent } from './compontents/add-dishes/add-dishes.component';
import { ListDishesByCategoryComponent } from './compontents/list-dishes-by-category/list-dishes-by-category.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatLineModule } from "@angular/material/core";
import { RestAppCoreModule } from "@app/core/rest-app-core.module";

@NgModule({
  declarations: [ ListMenusComponent, MainMenusPage, FormComponent, NewPage, EditPage, AddDishesComponent, ListDishesByCategoryComponent ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    SharedModule,
    MatDialogModule,
    MatListModule,
    MatLineModule,
    RestAppCoreModule
  ]
})
export class MenusModule {
}
