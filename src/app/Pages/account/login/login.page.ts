import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { NavController } from '@ionic/angular';
import { AuthService } from '../../../Service/auth/auth.service';
import { AccountService } from '../../../Service/account/account.service';
import { GlobalService } from '../../../Service/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userInfo = {
    "email": "",
    "password": "",  
  };

  public registerInfo = {
    "name":"",
    "email":"",
    "password": "",
    "confirm_password": ""
  }

  public resetPasswordEmail = {
    "email":""
  }

  public otpInfo = {
    "otp": "",
    "email": ""
  }

  public resetPassword = {
    "email":"",
    "password":"",
    "confirm_password":""
}
  public displayPwdIconName = "eye-off-outline"
  public displayPwdInd = false;
  public textType = "password"

  constructor(public auth: AuthService,
              public accountService: AccountService,
              private http: HttpClient,
              public navCtrl:NavController,
              public global: GlobalService) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.userInfo);
    this.global.loadingPresent();   
    this.accountService.login(this.userInfo).then((data: any) => {
      if(data.success) {
        // this.global.loginDetails = {
        //   "name" : data.data.name,
        //   "email": data.data.email,
        //   "expires_at": data.data.expires_at,
        //   "offline_user": data.data.offline_user,
        //   "subscribed_user": data.data.subscribed_user,
        //   "user_id": data.data.user_id,
        // }
        localStorage.setItem('access_Token', data.data.token_type+" "+data.data.access_token);
        this.accountService.getUserProfileInfo().then((data: any) => {
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
        this.global.enableLogOut = true;
        this.global.userName = data.data.name;
        localStorage.setItem("login_Info", JSON.stringify(this.global.loginDetails));
        this.global.presentToast('You are successfully logged in');
        this.navCtrl.pop();
        this.global.loadingDismiss();
        }).catch((error) => {
          alert(error);
          this.global.presentToast(error);
          this.global.loadingDismiss();
        })  
      } else {
        alert(data.message);
        this.global.presentToast(data.message);
        this.global.enableLogOut = false;
        this.global.loadingDismiss();
      }
      
    }).catch((error) => {
      alert(JSON.stringify(error));
      this.global.loadingDismiss();
    });
  }

  displayPasswordIcon() {
    if(this.displayPwdInd) {
      this.displayPwdIconName = "eye-off-outline";
      this.textType = "password";
      this.displayPwdInd = false;
    } else {
      this.displayPwdIconName = "eye-outline";
      this.textType = "text";
      this.displayPwdInd = true;
    }
  }
}
