import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipaccountPage } from './membershipaccount.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipaccountPageRoutingModule {}
