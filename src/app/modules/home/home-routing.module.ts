import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPage } from "@app/modules/home/pages/main/main.page";

const routes: Routes = [
  {
    path: '',
    component: MainPage,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
