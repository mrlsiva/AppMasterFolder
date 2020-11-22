import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../Service/global/global.service';
@Component({
  selector: 'app-readselectedbook',
  templateUrl: './readselectedbook.page.html',
  styleUrls: ['./readselectedbook.page.scss'],
})
export class ReadselectedbookPage implements OnInit {
  public bookName: any
  constructor(public global: GlobalService) {
    this.bookName = this.global.bookName;
    console.log(this.bookName);
  }

  ngOnInit() {
  }

}
