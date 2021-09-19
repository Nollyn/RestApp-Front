import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOptionsComponent } from './compontents/list-options/list-options.component';
import { MainPage } from './pages/main-options/main.page';
import { OptionsRoutingModule } from './options-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FormComponent } from './compontents/form/form.component';
import { NewPage } from './pages/new/new.page';
import { EditPage } from './pages/edit/edit.page';

@NgModule({
  declarations: [MainPage, ListOptionsComponent, FormComponent, NewPage, EditPage],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    SharedModule
  ]
})
export class OptionsModule { }
