import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      url: '/',
      icon: 'paper-plane'
    },
    {
      title: 'Our Distributorship',
      url: '/distributorship',
      icon: 'heart'
    },
    {
      title: 'Our Publishing Partners',
      url: '/distributorship',
      icon: 'archive'
    },
    {
      title: 'My Memberships',
      url: '/membershipaccount',
      icon: 'trash'
    },
    {
      title: 'Catalogue',
      url: '/',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  sideMenuPage(url: any) {
    this.router.navigate([url]);
  }

  openLoginPage() {
    this.router.navigate(['/login']);
  }
}
