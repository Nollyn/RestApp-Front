import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainPage } from "@app/modules/home/pages/main/main.page";
import { HomeRoutingModule } from "@app/modules/home/home-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";



@NgModule({
  declarations: [HomeComponent, MainPage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class HomeModule { }
