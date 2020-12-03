import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComboboxPage } from './combobox.page';

const routes: Routes = [
  {
    path: '',
    component: ComboboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComboboxPageRoutingModule {}
