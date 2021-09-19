import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'client-menu',
    loadChildren: () => import('./modules/client-menu/client-menu.module').then(m => m.ClientMenuModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./modules/restaurants/restaurants.module').then(m => m.RestaurantsModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'tables',
    loadChildren: () => import('./modules/tables/tables.module').then(m => m.TablesModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'menus',
    loadChildren: () => import('./modules/menus/menus.module').then(m => m.MenusModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'options',
    loadChildren: () => import('./modules/options/options.module').then(m => m.OptionsModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'drinks',
    loadChildren: () => import('./modules/drinks/drinks.module').then(m => m.DrinksModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'dishes',
    loadChildren: () => import('./modules/dishes/dishes.module').then(m => m.DishesModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  },
  {
    path: 'extras',
    loadChildren: () => import('./modules/extras/extras.module').then(m => m.ExtrasModule),
    data: { preload: false },
    // canActivate: [AuthorizeGuard],
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
