import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BaseListComponent} from '@app/base-list/base-list.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '@app/shared/shared.module';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {RestAppCoreModule} from '@app/core/rest-app-core.module';
import {ToastrModule} from 'ngx-toastr';
import {AppInjector} from '@app/core/base/app.Injector';

@NgModule({
  declarations: [
    BaseListComponent,
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexModule,
    FlexLayoutModule,
    RestAppCoreModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.setInjector(injector);
  }
}
