import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleDishPageRoutingModule } from './single-dish-routing.module';

import { SingleDishPage } from './single-dish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleDishPageRoutingModule
  ],
  declarations: [SingleDishPage]
})
export class SingleDishPageModule {}
