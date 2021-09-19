import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditPage } from "./pages/edit/edit.page";
import { MainCategoriesPage } from "./pages/main-categories/main-categories.page";
import { NewPage } from "./pages/new/new.page";

const routes: Routes = [
    {
        path: '',
        component: MainCategoriesPage,
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
export class CategoriesRoutingModule { }