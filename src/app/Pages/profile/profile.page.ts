import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  type: string;
  userName:string;
  emailId:string;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.userName = "PmrlSiva";
    this.emailId= "PmrlSiva@gmail.com"
    this.type = 'deposit';
    console.log('this.router.url', window.location.pathname);
  }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  openMembershipPage() {
    this.router.navigate(['/membershipaccount'])
  }
}
