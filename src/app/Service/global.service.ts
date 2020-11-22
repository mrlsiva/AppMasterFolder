import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpHandler,HttpRequest, HttpEvent, HttpResponse,
  HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public date = new Date();
  url = environment.homeCategoriesUrl;
  public categories  = ["kidscanrecycle","whatsyourhealthyplate"];
  public viewMoreBooks =[
    {
      "name" : "Kids Can Keep Air Clean",
      "age" : "3-5 Years",
      "Price" : "₹240",
      "Series Name" : "KIDS CAN RE-CYCLE - PICTURE SERIES",
    },
    {
      "name" : "Kids Can Clean Up Trash",
      "age" : "3-5 Years",
      "Price" : "₹240",
      "Series Name" : "KIDS CAN RE-CYCLE - PICTURE SERIES"
    },
    {
      "name" : "Kids Can Keep Water Clean",
      "age" : "3-5 Years",
      "Price" : "₹240",
      "Series Name" : "KIDS CAN RE-CYCLE - PICTURE SERIES"
    },
    {
      "name" : "Kids Can Recycle",
      "age" : "3-5 Years",
      "Price" : "₹240",
      "Series Name" : "KIDS CAN RE-CYCLE - PICTURE SERIES"
    },
    {
      "name" : "Kids Can Reuse",
      "age" : "3-5 Years",
      "Price" : "₹240",
      "Series Name" : "KIDS CAN RE-CYCLE - PICTURE SERIES"
    },
    {
      "name" : "Kids Can Use Less",
      "age" : "3-5 Years",
      "Price" : "₹240",
      "Series Name" : "KIDS CAN RE-CYCLE - PICTURE SERIES"
    },
  ];

  public pageName: any;

  constructor(private http : HttpClient,
              private router : Router){

  }

  

  getHomeCategories(){
    return this.http.get("https://littleprodigybooks.com/api/home");

  }

  setPageName(name: any) {
    this.pageName = name;
  }

  getPageName() {
    this.pageName
  }
}
