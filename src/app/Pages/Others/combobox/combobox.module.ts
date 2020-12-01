import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComboboxPageRoutingModule } from './combobox-routing.module';

import { ComboboxPage } from './combobox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComboboxPageRoutingModule
  ],
  declarations: [ComboboxPage]
})
export class ComboboxPageModule {}
