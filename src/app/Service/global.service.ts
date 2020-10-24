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
    constructor(private http : HttpClient,
        private router : Router){

    }
  public categories  = ["kidscanrecycle","whatsyourhealthyplate"];

  getHomeCategories(){
    //let headers = new HttpHeaders();
    //headers = headers.append('Content-Type','application/json');
    console.log('step 2');
    let Data={"displayCategories":this.categories}
console.log("Data "+JSON.stringify(Data)); 
return this.http.post(this.url,JSON.stringify(Data));

}
}
