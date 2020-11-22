import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  public faqDatas = [];
  public showAnswer = false;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getFaqData();
  }
  getFaqData() {
    this.http.get('assets/data/faq.json').toPromise().then((data: any) => {
      console.log(data.data);
      data.data.forEach((element: { question: any; answer: any; }) => {
        this.faqDatas.push({
          question : element.question,
          answer : element.answer,
          iconName : "chevron-forward-outline",
          ind: false 
        });
        console.log(this.faqDatas);
      });
    });
  }

  expandAnswer(ans: any,index: any) {
    console.log(index);
    if(ans.ind == false) {
      this.faqDatas[index].ind = true;
      this.faqDatas[index].iconName = 'chevron-down-outline'
      this.showAnswer = true;

    } else {
      this.faqDatas[index].ind = false;
      this.showAnswer = false;
      this.faqDatas[index].iconName = 'chevron-forward-outline'
    }
  }
}
