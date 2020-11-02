import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../../Service/global.service';
@Component({
  selector: 'app-viewmorebooks',
  templateUrl: './viewmorebooks.page.html',
  styleUrls: ['./viewmorebooks.page.scss'],
})
export class ViewmorebooksPage implements OnInit {
  public displayInd =  false;
 
  constructor(public global: GlobalService) {
    // alert(this.global.pageName);
    if(this.global.pageName == 'homePage'){
      this.displayInd = true;
    } else {
      this.displayInd = false;
    }
  }

  ngOnInit() {
    console.log(this.global.viewMoreBooks);
    
  }

}
