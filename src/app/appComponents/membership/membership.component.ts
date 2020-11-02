import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {}

  openLoginPage() {
    this.router.navigate(['/login']);
  }
}
