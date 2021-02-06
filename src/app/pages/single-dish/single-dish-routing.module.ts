import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleDishPage } from './single-dish.page';

const routes: Routes = [
  {
    path: '',
    component: SingleDishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleDishPageRoutingModule {}
