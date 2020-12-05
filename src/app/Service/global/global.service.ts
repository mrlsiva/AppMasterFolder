import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { ToastController, LoadingController  } from '@ionic/angular';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public date = new Date();
  public categories  = ["kidscanrecycle","whatsyourhealthyplate"];
  public pageName: any;
  public eBookData: any;
  public dataUrl = 'http://slinggroups.in/demo/littleprodigybook/api/home';
  public dataUrlNew = "https://littleprodigybooks.in/api/home";
  public eBookCategory: any;
  public bookName: any;
  public isDistributorship:any;
  public islibraryCatalogue: any;
  public individualCategoryData: any;
  public isFirstTime: boolean = true;
  public loginDetails: any;
  public enableLogOut = false;
  public userName ="Guest User";
  public isLoading = true;
  
  constructor(private http: HttpClient,
              public toastController: ToastController,
              public loadingController: LoadingController) {
    if(this.getLoginInfo()) {
      this.enableLogOut = true;
    } else {
      this.enableLogOut = false;
    }
  }

  async setIndividualCategory(individualCategory: any) {
    console.log(this.individualCategoryData);
    this.individualCategoryData = individualCategory;
  }

  setPageName(name: any) {
    this.pageName = name;
  }

  getPageName() {
    this.pageName
  }

  async getEbookData(){
    let data = this.http.get(this.dataUrlNew);
    return data;
  }
  setEbookCategory(category: any) {
    this.eBookCategory = category;
  }
   
  getEbookCategory() {
    return this.eBookCategory;
  }
  setBookName(bookName: any) {
    this.bookName = bookName
  }

  getLoginInfo() {
    let loginDetail= localStorage.getItem('login_Info');
    console.log((loginDetail == ''));
    if(loginDetail != '') {
      return JSON.parse(loginDetail);
    } else {
      return loginDetail;
    }
    //console.log(this.loginDetails);
   // return this.loginDetails;
  }

  clearLocalStorageLoginInfo() {
    localStorage.setItem('login_Info', '');
    localStorage.setItem('access_Token', '');
  }

  async presentToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async loadingPresent() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait ...',
      spinner: 'circles' 
    }).then(a => {
      a.present().then(() => {
        console.log('loading presented');
        if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort laoding'));
        }
      });
    });
  }
  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }
}
