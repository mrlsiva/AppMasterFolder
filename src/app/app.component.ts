import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AlertController } from '@ionic/angular';
import { GlobalService } from './Service/global/global.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 1;
  public appPages = [
    // {
    //   title: 'Profile',
    //   url: '/profile',
    //   icon: 'mail'
    // },
    {
      title: 'About Us',
      url: '/about',
      icon: 'archive'
    },
    {
      title: 'Out Library Catalogue',
      url: '/libraryCatalogue',
      icon: 'paper-plane'
    },
    {
      title: 'Our Distributorship',
      url: '/distributorship',
      icon: 'heart'
    },
    {
      title: 'Our Publishing Partners',
      url: '/publishingPartners',
      icon: 'archive'
    },
    {
      title: 'My Memberships',
      url: '/membershipaccount',
      icon: 'trash'
    },
    {
      title: 'Catalogue',
      url: '/catalogue',
      icon: 'warning'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'warning'
    },
    {
      title: 'Contact Us',
      url: '/contact',
      icon: 'warning'
    },
    {
      title: 'Terms & Conditions',
      url: '/terms',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public alertShown = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public alertController: AlertController,
    public global: GlobalService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('this.router.url', this.router.url);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.backButton.subscribeWithPriority(0, () => {
       // navigator['app'].exitApp();
       if(window.location.pathname == '/tab/chat' ||
        window.location.pathname == '/' ||
        window.location.pathname == '/tab/profile' ||
        window.location.pathname == '/tab/ebookreader' ||
        window.location.pathname == '/tab/home') {
          if(!this.alertShown){
            this.presentAlertConfirm();
            this.alertShown = true;
          }
       }
     });
    });
  }

  ngOnInit() {
    console.log('this.router.url', window.location.pathname);
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  sideMenuPage(url: any) {
    console.log(url);
    if(url == "/distributorship") {
      this.global.isDistributorship = "distributorship";
      this.router.navigate([url]);
    } else if(url == "/publishingPartners") {
      this.global.isDistributorship = "publishingPartners"
      this.router.navigate(['/distributorship']);
    } else if(url == "/libraryCatalogue") {
      this.global.isDistributorship = "libraryCatalogue"
      this.router.navigate(['/catalogue']);
    } else if(url == "/catalogue") {
      this.global.isDistributorship = "catalogue"
      this.router.navigate(['/catalogue']);
    } else {
      this.router.navigate([url]);
    }
    
  }

  openLoginPage() {
    this.router.navigate(['/login']);
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Do you want to exit from the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.alertShown = false;
          }
        }, {
          text: 'Exit',
          handler: () => {
            console.log('Do you want to exit from the app');
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }
}
