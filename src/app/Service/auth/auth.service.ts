import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public pageName: any;
  public home_Url = "https://littleprodigybooks.com/api/home";
  public product_Url = "https://littleprodigybooks.com/api/product/";
  public readBook_Url = "https://littleprodigybooks.com/api/read-book/"
  public homePageDatas: any;
  public productData: any;
  public readBookData: any;

  constructor(private http: HttpClient) { }

  async getEbookData(){
        return new Promise((resolve, rejects) => {
      this.http.get(this.home_Url).toPromise().then((res: any) => {
        this.homePageDatas = res.data;
        resolve(this.homePageDatas);
      }).then(() => {
        rejects();
      }); 
    }) 
    
  }

  async getProductDetail(category_id: string, sku: string) {
    return new Promise((resolve, rejects) => {
      console.log(this.product_Url+category_id+"/"+sku);
      this.http.get(this.product_Url+category_id+"/"+sku).subscribe((res: any) => {
        this.productData = res.data;
        resolve(this.productData);
      }); 
    });
  }

  async getReadBookData(category_id: string, sku: string) {
    return new Promise((resolve, rejects) => {
      console.log(this.readBook_Url+category_id+"/"+sku);
      
      this.http.get(this.readBook_Url+category_id+"/"+sku).toPromise().then((res: any) => {
        this.readBookData = res.data;
        console.log(this.readBookData);
        resolve(this.readBookData);
      }).catch((error) => {
        console.log(error);
      })
    })
  }
}
