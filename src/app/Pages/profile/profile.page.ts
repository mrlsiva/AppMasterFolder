import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { AuthService } from '../../Service/auth/auth.service';
import { AccountService } from '../../Service/account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  type: string;
  userName:string;
  emailId:string;
  public profileInfo = {
    "name" : "",
    "email" : ""
  }
  public passwordUpdate = {
    "old_password" : "",
    "password" : "",
    "confirm_password" : ""
  };


  constructor(private router: Router,
              public auth: AuthService,
              public accountService: AccountService) { }

  ngOnInit() {
    this.userName = "PmrlSiva";
    this.emailId= "PmrlSiva@gmail.com"
    this.type = 'membershipAcc';
    console.log('this.router.url', window.location.pathname);
  }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  openMembershipPage() {
    this.router.navigate(['/membershipaccount'])
  }

  updateProfile() {
    console.log(this.profileInfo);
    this.accountService.updateUserPofile(this.profileInfo).then((data: any) => {
      alert('updateProfile'+ data.message);
    }).catch((error) => {
      alert(JSON.stringify(error));
    })
  }

  updatePassword() {
    console.log(this.passwordUpdate);
    this.accountService.updateUserPassword(this.passwordUpdate).then((data: any) => {
      alert('updateProfile'+ data.message);
    }).catch((error) => {
      alert(JSON.stringify(error));
    })
  }
}
