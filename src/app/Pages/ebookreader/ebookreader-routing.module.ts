import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbookreaderPage } from './ebookreader.page';

const routes: Routes = [
  {
    path: '',
    component: EbookreaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbookreaderPageRoutingModule {}
