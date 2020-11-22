import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openPolicy() {
    this.router.navigate(['/policy']);
  }
}
