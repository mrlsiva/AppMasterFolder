import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../Service/auth/auth.service';
import { AccountService } from '../../../Service/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public registerInfo = {
    "name":"",
    "email":"",
    "password": "",
    "confirm_password": ""
  }
  constructor(public auth: AuthService,
              public accountService: AccountService) { }

  ngOnInit() {
  }

  register() {
    this.accountService.register(this.registerInfo).then((data: any) => {
      alert('register'+ data.message);
      
    }).catch((error) => {
      alert(JSON.stringify(error));
    })
  }
}
