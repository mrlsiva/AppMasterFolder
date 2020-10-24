import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individualcategory',
  templateUrl: './individualcategory.page.html',
  styleUrls: ['./individualcategory.page.scss'],
})
export class IndividualcategoryPage implements OnInit {
  data: any;
  cardImage:any;


  constructor(private route: ActivatedRoute, private router: Router) { 
    console.log('test1')
  }

  ngOnInit() {
     console.log('test2')
    // this.route.queryParams.subscribe((params: any) => {
    //   console.log(JSON.stringify(params));

    // });
    let val = this.route.snapshot.paramMap;
    this.data = val; 
    console.log('test3',val)
  }

}
