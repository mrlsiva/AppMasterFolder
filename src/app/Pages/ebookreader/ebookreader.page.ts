import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

import { Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../Service/global/global.service';
import { AuthService } from '../../Service/auth/auth.service';

@Component({
  selector: 'app-ebookreader',
  templateUrl: './ebookreader.page.html',
  styleUrls: ['./ebookreader.page.scss'],
})
export class EbookreaderPage implements OnInit {
  public folder: string;
  public eBookBannerTop: string;
  public eBookBannerBottom: string;
  public ebookReaderDatas: any;
  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true,
    loop: true
  };
  public bannerImages = [{"path" : "assets/images/ebookBanner/banner-1.jpg"},{"path" : "assets/images/ebookBanner/banner-2.jpg"},{"path" : "assets/images/ebookBanner/banner-3.jpg"},{"path" : "assets/images/ebookBanner/banner-4.jpg"}];
  public testData: any;
  public eBookList: any;

  constructor(private router: Router,
              public http: HttpClient, 
              public global: GlobalService,
              public auth: AuthService) {

  }

  ngOnInit() {
    console.log('this.router.url', window.location.pathname);
    this.getHomeEducationBanner()
    // this.getEbookReaderData().subscribe((res: any) => {
    //   this.eBookList = res.data;
    //   console.log(this.eBookList);
    // });
    this.getEbookData();
  }

  getHomeEducationBanner() {
    var currentDate = new Date();
    var  currentTime = moment(currentDate).format('HH');
    if(parseInt(currentTime) >= 0 && parseInt(currentTime) < 13) {
      this.eBookBannerTop = "table_top_day";
      this.eBookBannerBottom = "bottom_day"
    } else if(parseInt(currentTime) >= 13 && parseInt(currentTime) < 19) {
      this.eBookBannerTop = "table_top_cloud";
      this.eBookBannerBottom = "bottom_cloud";
    } else if(parseInt(currentTime) >= 19 && parseInt(currentTime) <= 24) {
      this.eBookBannerTop = "table_top_night";
      this.eBookBannerBottom = "bottom_night"
    }
  }
  getEbookReaderData() {
    return this.http.get('assets/data/ebookReader.json');
  }

  openViewMorePage(category: any) {
    console.log(category);
    this.global.setEbookCategory(category);
    this.global.setPageName('ebookReader');
    this.router.navigate(['/viewmorebooks']);
  }

  async getEbookData() {
    try {
      if(this.auth.homePageDatas != undefined) {
        this.eBookList = this.auth.homePageDatas;
      } else {
        this.auth.getEbookData().then((data: any) => {
          console.log(data);
          this.eBookList = data;
        }).catch((error) => {
          console.log(error);
        })
      }
      // (await this.global.getEbookData()).subscribe((data: any) => {
      //   console.log(data.data);
      //   this.eBookList = data.data;
      // });
    } catch(error) {
      console.log(error);
    }
      // this.http.get('http://slinggroups.in/demo/littleprodigybook/api/home').subscribe((data: any) => {
      //   this.eBookList = data.data;
      //   console.log(this.eBookList);
      // });
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Access-Control-Allow-Origin' : '*',
      //     'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
      //     'Content-Type': 'application/json'
      //   })
      // };
      // this.http.get('http://slinggroups.in/demo/littleprodigybook/api/product/2/470').subscribe((data: any) =>{
      //   this.eBookList = data.data.relatedProducts;
      //   console.log(this.eBookList);
      // });
    
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
    //   console.log(data);
    //   this.eBookList = data;
    // });

    // this.http.get('https://littleprodigybooks.com//api/product/2/470').subscribe((data: any) => {
    //   console.log(data.data);
    //   this.ebookReaderDatas = data.data.relatedProducts;
    //   // this.folder = this.ebookReaderDatas.book_title
    //   console.log(this.ebookReaderDatas);
    // });
  }
}
