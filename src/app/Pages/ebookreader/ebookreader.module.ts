import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookreaderPageRoutingModule } from './ebookreader-routing.module';

import { EbookreaderPage } from './ebookreader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookreaderPageRoutingModule
  ],
  declarations: [EbookreaderPage]
})
export class EbookreaderPageModule {}
