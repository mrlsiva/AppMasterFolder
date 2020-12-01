import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from '../../Service/global/global.service';
import { PaymentService } from '../../Service/payment/payment.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  public membershipPlan = [
    {
      "img" :"../../../assets/images/general/feather.png",
      "planName" : "BASIC",
      "amount" : 500,
      "validity" : "GET PLAN FOR TWO YEAR",
      "description" : "READ ALL E-BOOK",
      "support" : "24/7 SUPPORT"
    },
    {
      "img" :"../../../assets/images/general/diamond.png",
      "planName" : "ADVANCE",
      "amount" : 700,
      "validity" : "GET PLAN FOR TWO YEAR",
      "description" : "READ ALL E-BOOK",
      "support" : "24/7 SUPPORT"
    }
  ]
  constructor(private router: Router,
              public global: GlobalService,
              public payment: PaymentService) { }

  ngOnInit() {}

  openLoginPage(plan: any) {
    console.log(plan);
    
    let loginIfo = this.global.getLoginInfo();
    console.log(loginIfo);
    if(loginIfo) {
      if(loginIfo.data.subscribed_user == 1) {
        this.router.navigate(['/readselectedbook']);
      } else {
        this.payment.payThroughRazorPar(plan).then((data: any) => {
          alert('payment_id: ' + plan);
          this.router.navigate(['/login']);
        }).catch((error) => {
          alert(error);
        });
      }
    } else {
      this.router.navigate(['/login']);
    }
    
    
  }
}
