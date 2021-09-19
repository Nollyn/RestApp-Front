import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolBarComponent} from "@app/core/tool-bar/tool-bar.component";
import {SharedModule} from "@app/shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {DisplayFilterPipe} from "@app/core/pipes/display-filter.pipe";
import {FilterPipe} from "@app/core/pipes/filter.pipe";


@NgModule({
  declarations: [DisplayFilterPipe,
    ToolBarComponent, FilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [DisplayFilterPipe, ToolBarComponent, FilterPipe]
})
export class RestAppCoreModule {
}
