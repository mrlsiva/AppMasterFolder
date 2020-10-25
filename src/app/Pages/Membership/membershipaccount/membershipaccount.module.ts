import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembershipaccountPageRoutingModule } from './membershipaccount-routing.module';

import { MembershipaccountPage } from './membershipaccount.page';

import { MembershipComponent } from '../../../appComponents/membership/membership.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipaccountPageRoutingModule
  ],
  declarations: [MembershipaccountPage, MembershipComponent]
})
export class MembershipaccountPageModule {}
