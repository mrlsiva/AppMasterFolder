import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

import { GlobalService } from '../../Service/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  
   public bannerImages = [{"path" : "assets/images/ebookBanner/banner-1.jpg"},{"path" : "assets/images/ebookBanner/banner-2.jpg"},{"path" : "assets/images/ebookBanner/banner-3.jpg"},{"path" : "assets/images/ebookBanner/banner-4.jpg"}];
   public ResponseData:any;
   public categoriesData: any;
 
 
   constructor(private router: Router,
              public http: HttpClient,
              public global: GlobalService) { }
  
  ngOnInit() {
    //this.getCategoriesData();
    this.getCategoriesData().subscribe((res: any) => {
      this.categoriesData = res.catData;
      console.log(this.categoriesData);
    });
    console.log(this.global.date);
  }
  // getCategoriesData(){

  //   console.log('step 1');
  //   this.global.getHomeCategories().toPromise().then(response =>
  //    { this.ResponseData=response});
  //    console.log("dtta",this.ResponseData);
     

  // }

  getCategoriesData() {
    return this.http.get('assets/data/categories.json');
  }

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
