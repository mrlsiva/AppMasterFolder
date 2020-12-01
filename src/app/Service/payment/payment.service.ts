import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { promise } from 'protractor';

declare var Razorpay: any;
declare var RazorpayCheckout: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  
  async payThroughRazorPar(paymentInfo: any) {
    return new Promise((resolve, rejects) => {
      var options = {
        description: paymentInfo.description,
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: "INR", // your 3 letter currency code
        key: "rzp_test_lSfl0bnbcpFEwO", // your Key Id from Razorpay dashboard
        amount: 100 * paymentInfo.amount, // Payment amount in smallest denomiation e.g. cents for USD
        name: paymentInfo.planName,
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
        //alert('payment_id: ' + payment_id);
        resolve(payment_id);
      };
  
      var cancelCallback = function (error: any) {
        //alert(error.description + ' (Error ' + error.code + ')');
        resolve(error.description + ' (Error ' + error.code + ')');
      };
  
     RazorpayCheckout.open(options, successCallback, cancelCallback);
    })
    
  }
}
