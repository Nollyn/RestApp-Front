import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewPage } from "@app/modules/extras/pages/new/new.page";
import { EditPage } from "@app/modules/extras/pages/edit/edit.page";
import { MainExtrasPage } from "@app/modules/extras/pages/main-extras/main-extras.page";

const routes: Routes = [
  {
    path: '',
    component: MainExtrasPage,
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
export class ExtrasRoutingModule {
}
