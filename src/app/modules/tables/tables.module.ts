import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { FormComponent } from "@app/modules/tables/compontents/form/form.component";
import { MainPage } from "@app/modules/tables/pages/main-tables/main.page";
import { ListTablesComponent } from "@app/modules/tables/compontents/list-tables/list-tables.component";
import { NewPage } from "@app/modules/tables/pages/new/new.page";
import { TablesRoutingModule } from "@app/modules/tables/tables-routing.module";
import { EditPage } from "@app/modules/tables/pages/edit/edit.page";

@NgModule({
  declarations: [MainPage, ListTablesComponent, FormComponent, NewPage, EditPage],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ]
})
export class TablesModule { }
