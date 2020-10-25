import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

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
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getHomeEducationBanner()
    this.getEbookReaderData().subscribe((res: any) => {
      this.ebookReaderDatas = res.data;
      console.log(this.ebookReaderDatas);
    });
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
}
