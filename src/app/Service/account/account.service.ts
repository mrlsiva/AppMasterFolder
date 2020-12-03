import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public login_Url = "https://littleprodigybooks.com/api/auth/login";
  public logout_Url = "https://littleprodigybooks.com/api/logout";
  public regiseter_Url = "https://littleprodigybooks.com/api/auth/signup";
  public resetPasswordEmail_Url = "https://littleprodigybooks.com/api/auth/resetpass/email";
  public resetPasswordEmailOtp_Url = "https://littleprodigybooks.com/api/auth/resetpass/otp";
  public resetPassword_Url ="https://littleprodigybooks.com/api/auth/resetpassword";
  public updateUserProdile_Url = "https://littleprodigybooks.com/api/updateprofile";
  public updatePassword_Url = "https://littleprodigybooks.com/api/updatepassword";
  public getUserProfile_Url = "https://littleprodigybooks.com/api/user";

  constructor(private http: HttpClient,
              public global: GlobalService) { }

  async login(userInfo: any) {
    return new Promise((resolve, rejects) => {
      var headers = new HttpHeaders();
      headers.set('Access-Control-Allow-Origin' , '*');
      headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.set('Accept','application/json');
      headers.set('content-type','application/json');

      this.http.post(this.login_Url,userInfo).toPromise().then((res: any) => {
        console.log('fromAuth',res);
        // alert(res.success);
        resolve(res)
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  async logout() {
    return new Promise((resolve, rejects) => {
      const httpOptions = {
        headers: new HttpHeaders({  
            'Authorization':  localStorage.getItem("access_Token")
        })
      };
      console.log(httpOptions.headers);
      this.http.post(this.logout_Url,httpOptions).toPromise().then((res: any) => {
        console.log('fromAuth',res);
        alert(res.success);
        resolve(res);
      }).catch((error) => {
        console.log(error);
        rejects(error);
      })
    })
  }

  async register(userInfo: any) {
    console.log(userInfo);
    return new Promise((resolve, rejects) => {
      this.http.post(this.regiseter_Url,userInfo).toPromise().then((res: any) => {
        console.log('fromAuth',res);
        // alert(res.success);
        resolve(res);
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  async resetEmail(userInfo: any) {
    return new Promise((resolve, rejects) => {
      this.http.post(this.resetPasswordEmail_Url,{"email":userInfo}).toPromise().then((res: any) => {
        console.log('fromAuth',res);
        // alert(res.success);
        resolve(res);
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  async resetEmailPasswordOtp(userInfo: any) {
    return new Promise((resolve, rejects) => {
      this.http.post(this.resetPasswordEmailOtp_Url,userInfo).toPromise().then((res: any) => {
        console.log('fromAuth',res);
        // alert(res.success);
        resolve(res);
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  async resetPassword(userInfo: any) {
    return new Promise((resolve, rejects) => {
      this.http.post(this.resetPassword_Url,userInfo).toPromise().then((res: any) => {
        console.log('fromAuth',res);
        // alert(res.success);
        resolve(res);
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  async updateUserPofile(userInfo: any) {
    return new Promise((resolve, rejects) => {
      const httpOptions = {
        headers: new HttpHeaders({
            'Authorization':  localStorage.getItem("access_Token")
        })
      };
      console.log("httpOptions "+JSON.stringify(httpOptions));
      
      this.http.post(this.updateUserProdile_Url,userInfo, httpOptions).toPromise().then((res: any) => {
        console.log('fromAuth',res);
        // alert(res.success);
        resolve(res);
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  async getUserProfileInfo() {
    return new Promise((resolve, rejects) => {
      const httpOptions = {
        headers: new HttpHeaders({
            'Authorization':  localStorage.getItem("access_Token")
        })
      };
      console.log("httpOptions "+JSON.stringify(httpOptions));
      this.http.get(this.getUserProfile_Url,httpOptions).toPromise().then((data: any) => {
        console.log(data)
        this.global.userName = data.data.name;
        resolve(data);
      }).catch((error) => {
        rejects(error)
      })
    })
  }

  async updateUserPassword(userInfo: any) {
    return new Promise((resolve, rejects) => {
      const httpOptions = {
        headers: new HttpHeaders({
            'Authorization':  localStorage.getItem("access_Token")
        })
      };
      console.log("httpOptions "+JSON.stringify(httpOptions));
      
      this.http.post(this.updatePassword_Url,userInfo, httpOptions).toPromise().then((res: any) => {
        console.log('fromAuth',res);
        // alert(res.success);
        resolve(res);
      }).catch((error) => {
        console.log(error)
      })
    })
  }

}
