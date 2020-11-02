import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-readebook',
  templateUrl: './readebook.component.html',
  styleUrls: ['./readebook.component.scss'],
})
export class ReadebookComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      $(document).ready(function () {
        $('#container').flipBook({
          pages: [
            {src:"./assets/image/book1/0001.jpg", thumb:"./assets/image/book1/0001.jpg", title:"Cover"},
            {src:"./assets/image/book1/0002.jpg", thumb:"./assets/image/book1/0002.jpg", title:"Page two"},
            {src:"./assets/image/book1/0003.jpg", thumb:"./assets/image/book1/0003.jpg", title:"Page three"},
            {src:"./assets/image/book1/0004.jpg", thumb:"./assets/image/book1/0004.jpg", title:"Cover"},
            {src:"./assets/image/book1/0005.jpg", thumb:"./assets/image/book1/0005.jpg", title:"Page two"},
            {src:"./assets/image/book1/0006.jpg", thumb:"./assets/image/book1/0006.jpg", title:"Page two"},
            {src:"./assets/image/book1/0007.jpg", thumb:"./assets/image/book1/0007.jpg", title:"Page three"},
            {src:"./assets/image/book1/0008.jpg", thumb:"./assets/image/book1/0008.jpg", title:"Cover"},
            
          ]
        });
      });
    }, 3000);
    
  }

  ngOnInit() {}

}
