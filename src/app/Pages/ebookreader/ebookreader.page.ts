import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ebookreader',
  templateUrl: './ebookreader.page.html',
  styleUrls: ['./ebookreader.page.scss'],
})
export class EbookreaderPage implements OnInit {
  public folder: string;
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
    this.getEbookReaderData().subscribe((res: any) => {
      this.ebookReaderDatas = res.data;
      console.log(this.ebookReaderDatas);
    });
  }

  getEbookReaderData() {
    return this.http.get('assets/data/ebookReader.json');
  }
}
