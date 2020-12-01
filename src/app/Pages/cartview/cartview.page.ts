import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../Service/global/global.service';

declare var Razorpay: any;
declare var RazorpayCheckout: any;

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.page.html',
  styleUrls: ['./cartview.page.scss'],
})
export class CartviewPage implements OnInit {
  public individualCategoryDetails: any;;
  public cartViewInd = false;


  constructor(private router: Router,
              public global: GlobalService) {}

  ngOnInit() {
    console.log(this.global.individualCategoryData );
    if(this.global.individualCategoryData != undefined) {
      this.individualCategoryDetails = this.global.individualCategoryData;
      this.cartViewInd = true;
    } else {
      this.cartViewInd = false;
    }
  }
  openHomePage() {
    this.router.navigate(['/home']);
  }
  payThroughRazorPar() {
    var options = {
      description: this.individualCategoryDetails.description,
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: "INR", // your 3 letter currency code
      key: "rzp_test_lSfl0bnbcpFEwO", // your Key Id from Razorpay dashboard
      amount: 100 * this.individualCategoryDetails.actual_price, // Payment amount in smallest denomiation e.g. cents for USD
      name: this.individualCategoryDetails.book_title,
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
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error: any) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

   RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
