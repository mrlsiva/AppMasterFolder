import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GlobalService } from '../../../Service/global.service';

export interface IBatch{
  actual_price: ""
additional_info: ""
book_path: ""
book_title: ""
categories: ""
categories_id: ""
created_at: ''
description: ""
id: ""
in_stock: ""
isbn: ''
offer_price: ""
product_details: ""
product_img: ''
review: ""
sale: ""
sku: ""
tags: ""
thumb_img: ""
updated_at: ''
}

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.page.html',
  styleUrls: ['./combobox.page.scss'],
})
export class ComboboxPage implements OnInit {
  boxData :any;
  category_list;
  category_select :any;
  category_id='';
  user:any;
  combo_type:any;
  book_count : any;
  book_selected :any;
  selected_product =[];
  combo_type_image =["https://littleprodigybooks.in/resources/img/king.png",
                      "https://littleprodigybooks.in/resources/img/queen.png",
                      "https://littleprodigybooks.in/resources/img/knight.png",
                       "https://littleprodigybooks.in/resources/img/warden.png"];
  combo_img : any;
  combo_title:any;
  combo_title_list = ['The King’s Box','The Queen’s Box','The Knight’s Box','The Warden’s Box'];
  highlightedBatch: IBatch[] = [];

  constructor(private router: Router,
    public http: HttpClient,
    public global: GlobalService,
    private toast: ToastController) { }

  ngOnInit() {
    this.global.getHomeCategories().toPromise().then(response =>
      { 
        if(response['success']===true){
          const boxData1:IBatch[] = response['data'];
        this.boxData = boxData1
          console.log('box',this.boxData);
          this.loadCategoryData(0);
          this.book_count =10;
          this.combo_img = this.combo_type_image[0];
          this.combo_title = this.combo_title_list[0];
        }
       

     });
  }
  onOptionsSelected(value){
    this.category_id = value;
    this.loadCategoryData(parseInt(value)-1);
}
loadCategoryData(id: any){
for(let i=0;i<this.boxData.length;i++){
  if(i==id){
    this.category_select  = this.boxData[i].products;
    break;
  }
}
console.log(this.category_select);
}
onComboSelected(id: any){
switch(id) { 
  case '1': { 
    this.book_count = 10;
    this.combo_img = this.combo_type_image[0];
    this.combo_title = this.combo_title_list[0];
     break; 
  } 
  case '2': { 
    this.book_count = 20;
    this.combo_img = this.combo_type_image[1];
    this.combo_title = this.combo_title_list[1];
     break; 
  } 
  case '3': { 
    this.book_count = 30;
    this.combo_img = this.combo_type_image[2];
    this.combo_title = this.combo_title_list[2];
    break; 
 } 
 case '4': { 
  this.book_count = 40;
  this.combo_img = this.combo_type_image[3];
  this.combo_title = this.combo_title_list[3];
  break; 
} 
  default: { 
     //statements; 
     break; 
  } 
}
}

multiSelect(batch: any){
if (this.highlightedBatch.indexOf(batch) === -1) {
if(this.highlightedBatch.length<this.book_count){
  this.highlightedBatch.push(batch);
}else{
  this.presentToast();
}
  console.log('add');
} else {
  const _index = this.highlightedBatch.indexOf(batch);
  this.highlightedBatch.splice(_index, 1);
  console.log('remove');
}
this.book_selected = this.highlightedBatch.length;
console.log(this.highlightedBatch);
}
async presentToast() {
const toast = await this.toast.create({
  message: 'Your settings have been saved.',
  duration: 2000
});
toast.present();
} 


}
