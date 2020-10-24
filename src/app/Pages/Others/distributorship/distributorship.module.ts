import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistributorshipPageRoutingModule } from './distributorship-routing.module';

import { DistributorshipPage } from './distributorship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistributorshipPageRoutingModule
  ],
  declarations: [DistributorshipPage]
})
export class DistributorshipPageModule {}
