import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dishes',
    loadChildren: () => import('./pages/dishes/dishes.module').then( m => m.DishesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'single-dish',
    loadChildren: () => import('./pages/single-dish/single-dish.module').then( m => m.SingleDishPageModule)
  },
  {
    path: 'add-dish',
    loadChildren: () => import('./pages/add-dish/add-dish.module').then( m => m.AddDishPageModule)
  },
  {
    path: 'add-notes',
    loadChildren: () => import('./pages/add-notes/add-notes.module').then( m => m.AddNotesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
