import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListExtrasComponent } from './compontents/list-extras/list-extras.component';
import { MainExtrasPage } from './pages/main-extras/main-extras.page';
import { ExtrasRoutingModule } from './extras-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FormComponent } from './compontents/form/form.component';
import { NewPage } from './pages/new/new.page';
import { EditPage } from './pages/edit/edit.page';

@NgModule({
  declarations: [MainExtrasPage, ListExtrasComponent, FormComponent, NewPage, EditPage],
  imports: [
    CommonModule,
    ExtrasRoutingModule,
    SharedModule
  ]
})
export class ExtrasModule { }
