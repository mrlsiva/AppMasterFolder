import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { error } from 'protractor';

import { AuthService } from '../../../Service/auth/auth.service';

@Component({
  selector: 'app-individualcategory',
  templateUrl: './individualcategory.page.html',
  styleUrls: ['./individualcategory.page.scss'],
})
export class IndividualcategoryPage implements OnInit {
  data: any;
  cardImage:any;
  public category_id :any;
  public sku : any;



  constructor(private route: ActivatedRoute, 
              private router: Router,
              public auth: AuthService) { 
    console.log('test1')
  }

  ngOnInit() {
     console.log('test2')
    // this.route.queryParams.subscribe((params: any) => {
    //   console.log(JSON.stringify(params));

    // });
    let val = this.route.snapshot.paramMap;
    this.data = val; 
    console.log('test3',val);

    this.route.params.subscribe(params => {
      this.category_id = +params['categories_id'];
      this.sku = +params['sku'];
      });
      this.getProductDetails();
    //  this.auth.getProductDetail(this.category_id,this.sku).then(response =>
    //     { 
    //        //this.data=response['data'];
    //     }
    //     );
  }

  async getProductDetails() {
    this.auth.getProductDetail(this.category_id,this.sku).then((data: any) => {
      console.log(data);
      this.data = data;
    }).catch((error) => {
      console.log(error);
      
    })
  }
  getrelatedItem(val: any){
    console.log(val);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: val
      }
    };
    this.router.navigate(['/individualcategory', val]);
  }

}
