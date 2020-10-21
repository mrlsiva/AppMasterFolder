import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  // public folder: string;
  // public ebookReaderDatas: any;
  // public slideOpts = {
  //   initialSlide: 0,
  //   speed: 400,
  //   autoplay:true,
  //   loop: true
  // };
  // public bannerImages = [{"path" : "assets/images/ebookBanner/banner-1.jpg"},{"path" : "assets/images/ebookBanner/banner-2.jpg"},{"path" : "assets/images/ebookBanner/banner-3.jpg"},{"path" : "assets/images/ebookBanner/banner-4.jpg"}];
  constructor(private activatedRoute: ActivatedRoute,
              public http: HttpClient) { }

  ngOnInit() {
    // this.getEbookReaderData().subscribe((res: any) => {
    //   this.ebookReaderDatas = res.data;
    //   console.log(this.ebookReaderDatas);
    // });
  }

  // getEbookReaderData() {
  //   return this.http.get('assets/data/ebookReader.json');
  // }
}
