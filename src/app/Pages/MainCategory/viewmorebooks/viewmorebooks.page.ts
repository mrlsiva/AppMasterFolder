import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

// import { GlobalService } from '../../../Service/global.service';
import { GlobalService } from '../../../Service/global/global.service';
import { AuthService } from '../../../Service/auth/auth.service';

@Component({
  selector: 'app-viewmorebooks',
  templateUrl: './viewmorebooks.page.html',
  styleUrls: ['./viewmorebooks.page.scss'],
})
export class ViewmorebooksPage implements OnInit {
  public displayInd =  false;
  public eBookCategory: any;
  public title: any;
  public displayDes = false;
  public iconName = "chevron-forward-outline";

  constructor(public global: GlobalService, 
              private router: Router,
              public auth: AuthService,
              public http: HttpClient) {
    // alert(this.global.pageName);
    if(this.global.pageName == 'homePage'){
      this.displayInd = true;
    } else {
      this.displayInd = false;
    }
    this.eBookCategory =  this.global.getEbookCategory();
    this.title = this.eBookCategory.category.series_name;
    console.log(this.title);
    console.log(this.eBookCategory.products);
  
  }

  ngOnInit() {
    //console.log(this.global.viewMoreBooks);
    
  }

  openReadBookPage(book: any) {
    console.log(book.categories_id, book.sku);
    this.auth.getReadBookData(book.categories_id, book.sku).then((data: any) => {
      this.global.setBookName(book.book_title);
      this.router.navigate(['/readselectedbook']);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })
  }

  openDescription() {
    console.log('test');
    if(this.displayDes) {
      this.iconName = "chevron-forward-outline"
      this.displayDes = false;
    } else {
      this.iconName = "chevron-down-outline"
      this.displayDes = true;

    }
  }
}
