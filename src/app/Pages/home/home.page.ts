import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

import { GlobalService } from '../../Service/global.service';
import { AuthService } from '../../Service/auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  public bannerImages = [{"path" : "assets/images/homeBanner/home_banner_1.jpg"},{"path" : "assets/images/homeBanner/home_banner_2.jpg"},{"path" : "assets/images/homeBanner/home_banner_3.jpg"},{"path" : "assets/images/homeBanner/home_banner_4.jpg"},{"path" : "assets/images/homeBanner/home_banner_5.jpg"}];
  public ResponseData:any =[];
  public categoriesData: any;
  public titleData: any;
  slideOptsOne = {
   initialSlide: 0,
   slidesPerView: 1,
   autoplay:true
  };
  public displayInd = false;

   constructor(private router: Router,
              public http: HttpClient,
              public global: GlobalService,
              public auth: AuthService) { }
  
  ngOnInit() {
    this.getCategoriesData();
    
  }
  async getCategoriesData(){
    // this.global.getHomeCategories().toPromise().then(response =>
    //  { 
    //    if(response['success']===true)
    //    this.categoriesData=response['data'];
    // });
    console.log(this.auth.homePageDatas);
    if(this.auth.homePageDatas != undefined) {
      this.categoriesData = this.auth.homePageDatas;
    } else {
      console.log(this.auth.homePageDatas);
      this.auth.getEbookData().then((data: any) => {
        console.log(data);
        this.categoriesData = data;
        setTimeout(() => {
          this.displayInd = true;
        }, 3000);
        
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
