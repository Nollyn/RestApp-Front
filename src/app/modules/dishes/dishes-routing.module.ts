import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainDishesPage } from "./pages/main-dishes/main-dishes.page";
import { NewPage } from "@app/modules/dishes/pages/new/new.page";
import { EditPage } from "@app/modules/dishes/pages/edit/edit.page";

const routes: Routes = [
  {
    path: '',
    component: MainDishesPage,
  },
  {
    path: 'new',
    component: NewPage,
  },
  {
    path: 'edit/:id',
    component: EditPage,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule {
}
