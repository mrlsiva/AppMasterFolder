import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  public userName: any;
  
  constructor(private http: HttpClient) {
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
    this.loginDetails = JSON.parse(localStorage.getItem('login_Info'));
    //console.log(this.loginDetails);
    return this.loginDetails;
  }
}
