import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainMenusPage } from "./pages/main-menus/main-menus.page";
import { NewPage } from "@app/modules/menus/pages/new/new.page";
import { EditPage } from "@app/modules/menus/pages/edit/edit.page";

const routes: Routes = [
  {
    path: '',
    component: MainMenusPage,
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
export class MenusRoutingModule {
}
