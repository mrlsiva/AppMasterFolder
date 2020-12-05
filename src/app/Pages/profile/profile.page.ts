import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { AuthService } from '../../Service/auth/auth.service';
import { AccountService } from '../../Service/account/account.service';
import { GlobalService } from '../../Service/global/global.service';
import { error } from 'protractor';

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
  public displayInd = false;


  constructor(private router: Router,
              public auth: AuthService,
              public accountService: AccountService,
              public global: GlobalService) { }

  ngOnInit() {
    this.type = 'membershipAcc';
    let loginInfo = this.global.getLoginInfo();
    console.log(loginInfo);
    if(loginInfo != '') {
      this.profileInfo = {
        "name" : loginInfo.name,
        "email" : loginInfo.email
      }
      this.displayInd = true;
    } else {
      this.displayInd = false;
    }
    
    console.log('this.router.url', window.location.pathname);
  }
  openLogin() {
    this.router.navigate(['/login']);
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  openMembershipPage() {
    this.router.navigate(['/membershipaccount'])
  }

  updateProfile() {
    console.log(this.profileInfo);
    this.global.loadingPresent();
    this.accountService.updateUserPofile(this.profileInfo).then((data: any) => {
      if(data.success) {
        this.accountService.getUserProfileInfo().then((data: any) => {
          this.profileInfo = {
            "name" : data.data.name,
            "email" : data.data.email
          }
          this.global.loginDetails = {
            "name" : data.data.name,
            "email": data.data.email,
            "email_verified_at" : data.data.email_verified_at,
            "offline_user": data.data.offline_user,
            "subscribed_user": data.data.subscribed_user,
            "user_id": data.data.id,
            "registration_mode" : data.data.registration_mode,
            "role_id" : data.data.role_id,
            "session_id" : data.data.session_id,
            "success" : "true"
          }
        localStorage.setItem("login_Info", JSON.stringify(this.global.loginDetails));
        this.global.presentToast(data.message);
        this.global.loadingDismiss();
        }).catch((error) => {
          this.global.presentToast(error);
          this.global.loadingDismiss();
        })
      }
    }).catch((error) => {
      //alert(JSON.stringify(error));
      this.global.presentToast(error);
      this.global.loadingDismiss();
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
