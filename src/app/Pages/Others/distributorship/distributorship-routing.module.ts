import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistributorshipPage } from './distributorship.page';

const routes: Routes = [
  {
    path: '',
    component: DistributorshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistributorshipPageRoutingModule {}
