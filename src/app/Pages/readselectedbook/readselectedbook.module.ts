import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadselectedbookPageRoutingModule } from './readselectedbook-routing.module';

import { ReadselectedbookPage } from './readselectedbook.page';

import { ReadebookComponent } from '../../appComponents/readebook/readebook.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadselectedbookPageRoutingModule
  ],
  declarations: [ReadselectedbookPage, ReadebookComponent]
})
export class ReadselectedbookPageModule {}
