import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewmorebooksPageRoutingModule } from './viewmorebooks-routing.module';

import { ViewmorebooksPage } from './viewmorebooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewmorebooksPageRoutingModule
  ],
  declarations: [ViewmorebooksPage]
})
export class ViewmorebooksPageModule {}
