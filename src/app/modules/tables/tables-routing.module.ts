import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditPage } from "./pages/edit/edit.page";
import { MainPage } from "./pages/main-tables/main.page";
import { NewPage } from "./pages/new/new.page";

const routes: Routes = [
    {
        path: '',
        component: MainPage,
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
export class TablesRoutingModule { }