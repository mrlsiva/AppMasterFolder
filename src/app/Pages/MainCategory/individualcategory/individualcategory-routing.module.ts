import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualcategoryPage } from './individualcategory.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualcategoryPageRoutingModule {}
