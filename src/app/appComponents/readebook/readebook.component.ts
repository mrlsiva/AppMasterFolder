import { Component, OnInit } from '@angular/core';
declare var $: any;
import { AuthService } from '../../Service/auth/auth.service';
@Component({
  selector: 'app-readebook',
  templateUrl: './readebook.component.html',
  styleUrls: ['./readebook.component.scss'],
})
export class ReadebookComponent implements OnInit {
  datas = [
    {src:"https://littleprodigybooks.in/storage/app/public/uploads/book/book_470.pdf/0001.jpg", thumb:"./assets/image/book1/0001.jpg", title:"Page two"},
    {src:"https://littleprodigybooks.in/storage/app/public/uploads/book/book_470.pdf/0001.jpg", thumb:"./assets/image/book1/0004.jpg", title:"Cover"},
    {src:"./assets/image/book3/0005.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0006.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0007.jpg", thumb:"./assets/image/book1/0005.jpg", title:"Page two"},
    {src:"./assets/image/book3/0008.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0009.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0010.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0011.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0012.jpg", thumb:"./assets/image/book1/0005.jpg", title:"Page two"},
    {src:"./assets/image/book3/0013.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0014.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0015.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0016.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0017.jpg", thumb:"./assets/image/book1/0005.jpg", title:"Page two"},
    {src:"./assets/image/book3/0018.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0019.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0020.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0021.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0022.jpg", thumb:"./assets/image/book1/0005.jpg", title:"Page two"},
    {src:"./assets/image/book3/0023.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0024.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0025.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0026.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0027.jpg", thumb:"./assets/image/book1/0005.jpg", title:"Page two"},
    {src:"./assets/image/book3/0028.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0029.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0030.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0031.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0032.jpg", thumb:"./assets/image/book1/0005.jpg", title:"Page two"},
    {src:"./assets/image/book3/0033.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
    {src:"./assets/image/book3/0034.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
    {src:"./assets/image/book3/0036.jpg", thumb:"./assets/image/book1/0008.jpg", title:"Cover"}
  ]
  public eBookImages = [];
  constructor(public auth: AuthService) {
    //console.log(this.auth.readBookData.book_pages);
    this.auth.readBookData.book_pages.forEach(element => {
      this.eBookImages.push({
            src: element,
            thumb: element,
            title: this.auth.readBookData.book.book_title
         
      });
      
      
    });
    //console.log(this.eBookImages);
    this.loadimage(this.eBookImages);
    // setTimeout(() => {
    //   console.log(this.datas);
      
    //   $(document).ready(function () {
    //     var datas = $(this).datas;
    //     $('#container').flipBook(datas);
    //   });
    // }, 3000);
    
  }

  ngOnInit() {
    //this.loadimage(this.datas);
  }
  ionViewDidEnter(){
    
  }
  loadimage(datas: any) {
    setTimeout(() => {
      $(document).ready(function () {
        //console.log(JSON.stringify(datas));
        $('#container').flipBook({pages: datas})
      });
    }, 3000);
  }
}
