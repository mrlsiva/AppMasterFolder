import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualcategoryPageRoutingModule } from './individualcategory-routing.module';

import { IndividualcategoryPage } from './individualcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualcategoryPageRoutingModule
  ],
  declarations: [IndividualcategoryPage]
})
export class IndividualcategoryPageModule {}
