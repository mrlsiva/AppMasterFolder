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
       
    this.accountService.login(this.userInfo).then((data: any) => {
      if(data.success) {
        localStorage.setItem('access_Token', data.data.token_type+" "+data.data.access_token);
        localStorage.setItem('login_Info', JSON.stringify(data));
        this.global.enableLogOut = true;
        this.global.userName = data.data.name;
        this.navCtrl.pop();
      } else {
        alert(data.message);
        this.global.enableLogOut = false;
      }
      
    }).catch((error) => {
      alert(JSON.stringify(error));
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
