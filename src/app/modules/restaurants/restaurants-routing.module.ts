import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPage } from "@app/modules/restaurants/pages/main/main.page";
import { NewPage } from "@app/modules/restaurants/pages/new/new.page";
import { EditPage } from "@app/modules/restaurants/pages/edit/edit.page";

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
export class RestaurantsRoutingModule { }
