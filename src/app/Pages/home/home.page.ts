import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

import { GlobalService } from '../../Service/global/global.service';
import { AuthService } from '../../Service/auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
 // public bannerImages = [{"path" : "assets/images/homeBanner/home_banner_1.jpg"},{"path" : "assets/images/homeBanner/home_banner_2.jpg"},{"path" : "assets/images/homeBanner/home_banner_3.jpg"},{"path" : "assets/images/homeBanner/home_banner_4.jpg"},{"path" : "assets/images/homeBanner/home_banner_5.jpg"}];
  public ResponseData:any =[];
  public categoriesData: any;
  public titleData: any;
  slideOptsOne = {
   initialSlide: 0,
   slidesPerView: 1,
   autoplay:true
  };
  public displayInd = false;
  public firstTimeDisplayImg = [
    {"path" : "assets/images/firstTimeDisplay/Little_Prodigy_Splash_01.png"},
    {"path" : "assets/images/firstTimeDisplay/Little_Prodigy_Splash_02.png"},
    {"path" : "assets/images/firstTimeDisplay/Little_Prodigy_Splash_03.png"},
    {"path" : "assets/images/firstTimeDisplay/Little_Prodigy_Splash_04.png"}
  ];
  public bannerImages = [
    {"path" : "assets/images/homeBanner/home_banner_1.jpg", "text" : "A Place Set Aside For Books And Their Friends", "texttwo" : "Enchanting Selections Of Wonderful Books"},
    {"path" : "assets/images/homeBanner/home_banner_2.jpg", "text" : "Once You Learn To Read, You Will Be Forever Free", "texttwo" : "Where You Never Pay Full Price For Anything"},
    {"path" : "assets/images/homeBanner/home_banner_3.jpg", "text" : "Reading Helps Your Seed Of Knowledge Grow", "texttwo" : "A Place Set Aside For Books And Their Friends"},
    {"path" : "assets/images/homeBanner/home_banner_4.jpg", "text" : "You’re Never Alone When You’re Reading A Book", "texttwo" : "What Goes Into The Mind Comes Out In A Life"},
    {"path" : "assets/images/homeBanner/home_banner_5.jpg", "text" : "AThe Legendary Independent Bookstore", "texttwo" : "Read! You’d Be Surprised What You Find"}
   ];
  public appOpenFirstTime: boolean;
   
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 2.8,
    autoplay:true
   };
   
  constructor(private router: Router,
              public http: HttpClient,
              public global: GlobalService,
              public auth: AuthService) { }
  
  ngOnInit() {
    // let fisrtTime = localStorage.getItem('isFirstTime');
    // if(fisrtTime) {
    //   this.appOpenFirstTime = false;
    // } else {
    //   this.appOpenFirstTime = true;
    // }
    this.getCategoriesData();
    
  }
  async getCategoriesData(){
    if(this.auth.homePageDatas != undefined) {
      this.categoriesData = this.auth.homePageDatas;
    } else {
      console.log(this.auth.homePageDatas);
      this.global.loadingPresent(); 
      this.auth.getEbookData().then((data: any) => {
        console.log(data);
        this.categoriesData = data;
        setTimeout(() => {
          this.displayInd = true;
        }, 2000);
        this.global.loadingDismiss();
      }).catch((error) => {
        this.global.loadingDismiss();
      })
    }
  }

  // getCategoriesData() {
  //   return this.http.get('assets/data/categories.json');
  // }

  navigate(val: any){
    console.log(val);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: val
      }
    };
    this.router.navigate(['/individualcategory', val]);
  }

  openViewMorePage() {
    this.global.setPageName('homePage');
    this.router.navigate(['/viewmorebooks']);
  }
}
