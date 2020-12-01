import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../../Service/account/account.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  public resetPasswordEmail = {
    "email":"",
    "otp":"",
  }
  public isOptSent = false;

  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  sendPasswordLnk() {
    if(this.isOptSent) {
      this.isOptSent = false;
    } else {
      this.isOptSent = true;
    }
    console.log(this.resetPasswordEmail);
    this.accountService.resetEmail(this.resetPasswordEmail.email).then((data: any) => {
      console.log('resetemail'+ JSON.stringify(data));
      alert(data.message);
    }).catch((error) => {
      console.log(error);
      
    })
  }

  verifyOTP() {
    if(this.isOptSent) {
      this.isOptSent = false;
    } else {
      this.isOptSent = true;
    }
    console.log(this.resetPasswordEmail);
    this.accountService.resetEmailPasswordOtp(this.resetPasswordEmail).then((data: any) => {
      console.log('resetemail'+ JSON.stringify(data));
      alert(data.message);
    }).catch((error) => {
      console.log(error);
      
    })
  }

}
