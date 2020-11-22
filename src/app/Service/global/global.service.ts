import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { resolve } from 'dns';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public date = new Date();
  public categories  = ["kidscanrecycle","whatsyourhealthyplate"];
  public pageName: any;
  public eBookData: any;
  public dataUrl = 'http://slinggroups.in/demo/littleprodigybook/api/home';
  public dataUrlNew = "https://littleprodigybooks.com/api/home";
  public eBookCategory: any;
  public bookName: any;
  public isDistributorship:any;
  public islibraryCatalogue: any;

  constructor(private http: HttpClient) { }

  
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
}
