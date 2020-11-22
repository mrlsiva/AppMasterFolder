import { Component, OnInit } from '@angular/core';

import { Router, RoutesRecognized } from '@angular/router';

import { GlobalService } from '../../../Service/global/global.service';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  public islibraryCatalogue:boolean=false;
  public title : string;
  constructor(public router: Router, public global: GlobalService) {
    if(this.global.isDistributorship == "libraryCatalogue") {
      this.islibraryCatalogue = true;
      this.title = "Out Library Catalogue";
    } else {
      this.islibraryCatalogue = false;
      this.title = "Catalogue";
    }
  }

  ngOnInit() {
  }

}
