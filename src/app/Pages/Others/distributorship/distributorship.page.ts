import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-distributorship',
  templateUrl: './distributorship.page.html',
  styleUrls: ['./distributorship.page.scss'],
})
export class DistributorshipPage implements OnInit {
  previousUrl: any;
  isDistributorship:boolean=false;
  title : string;

  constructor(public router: Router) { 
    router.events
 
  }

  ngOnInit() {
    
  }

}
