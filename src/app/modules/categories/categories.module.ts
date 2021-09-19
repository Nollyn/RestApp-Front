import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCategoriesPage } from './pages/main-categories/main-categories.page';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ListCategoriesComponent } from './compontents/list-categories/list-categories.component';
import { FormComponent } from './compontents/form/form.component';
import { NewPage } from './pages/new/new.page';
import { EditPage } from './pages/edit/edit.page';

@NgModule({
  declarations: [
    MainCategoriesPage,
    ListCategoriesComponent,
    FormComponent,
    NewPage,
    EditPage
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
  ]
})
export class CategoriesModule {
}
