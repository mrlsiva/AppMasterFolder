import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { error } from 'protractor';

import { AuthService } from '../../../Service/auth/auth.service';
import { GlobalService } from '../../../Service/global/global.service';

declare var Razorpay: any;
declare var RazorpayCheckout: any;

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
              public auth: AuthService,
              public global: GlobalService) { 
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
      this.global.setIndividualCategory(data);
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

  openCartPage() {
    this.router.navigate(['/cartview']);
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: "INR", // your 3 letter currency code
      key: "rzp_test_lSfl0bnbcpFEwO", // your Key Id from Razorpay dashboard
      amount: 100 * 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Razorpay',
      prefill: {
        email: 'test@razorpay.com',
        contact: '9990009991',
        name: 'Razorpay'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id: any) {
      alert('payment success');
    };

    var cancelCallback = function (error: any) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

   // RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
