import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router  } from '@angular/router';
@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {
  public firstTimeDisplayImg = [
    {"path" : "assets/images/firstTimeDisplay/Little_Prodigy_Splash_01.png"},
    {"path" : "assets/images/firstTimeDisplay/Little_Prodigy_Splash_02.png"},
    {"path" : "assets/images/firstTimeDisplay/Little_Prodigy_Splash_03.png"},
    {"path" : "assets/images/firstTimeDisplay/Little_Prodigy_Splash_04.png"}
  ];
  public bannerImages = [{"path" : "assets/images/homeBanner/home_banner_1.jpg"},{"path" : "assets/images/homeBanner/home_banner_2.jpg"},{"path" : "assets/images/homeBanner/home_banner_3.jpg"},{"path" : "assets/images/homeBanner/home_banner_4.jpg"},{"path" : "assets/images/homeBanner/home_banner_5.jpg"}];
  public appOpenFirstTime: boolean;

  constructor(private navCtrl: NavController,
              private router: Router,) { }

  ngOnInit() {
  }

  openRootPage() {
    //this.navCtrl.setDirection('root');
    this.router.navigateByUrl('tab/home',{ replaceUrl: true });
  }

}
