import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadselectedbookPage } from './readselectedbook.page';

const routes: Routes = [
  {
    path: '',
    component: ReadselectedbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadselectedbookPageRoutingModule {}
