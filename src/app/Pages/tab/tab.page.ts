import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  public folder: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // alert(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
