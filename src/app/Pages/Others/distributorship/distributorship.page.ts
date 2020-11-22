import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

import { GlobalService } from '../../../Service/global/global.service';
@Component({
  selector: 'app-distributorship',
  templateUrl: './distributorship.page.html',
  styleUrls: ['./distributorship.page.scss'],
})
export class DistributorshipPage implements OnInit {
  previousUrl: any;
  isDistributorship:boolean=false;
  title : string;

  constructor(public router: Router, public global: GlobalService) { 
    router.events
    if(this.global.isDistributorship == "distributorship") {
      this.isDistributorship = true;
      this.title = "Our Distributorship";
    } else {
      this.isDistributorship = false;
      this.title = "Our Publishing Partners";
    }
  }

  ngOnInit() {
    
  }

}
