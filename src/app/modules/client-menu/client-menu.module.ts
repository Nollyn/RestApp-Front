import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientMenuListComponent} from './components/list/client-menu-list.component';
import {MainPage} from './pages/main/main.page';
import {ClientMenuRoutingModule} from './client-menu-routing.module';
import {SharedModule} from '@app/shared/shared.module';
import {MatListModule} from "@angular/material/list";
import {RestAppCoreModule} from "@app/core/rest-app-core.module";


@NgModule({
  declarations: [ClientMenuListComponent, MainPage],
  imports: [
    CommonModule,
    ClientMenuRoutingModule,
    SharedModule, RestAppCoreModule,
    MatListModule
  ]
})
export class ClientMenuModule {
}
