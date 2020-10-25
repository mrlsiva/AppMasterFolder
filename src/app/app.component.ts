import { Component, OnInit } from '@angular/core';

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
    {
      title: 'Profile',
      url: '/login',
      icon: 'mail'
    },
    {
      title: 'Out Library Catalogue',
      url: '/membershipaccount',
      icon: 'paper-plane'
    },
    {
      title: 'Our Distributorship',
      url: '/home',
      icon: 'heart'
    },
    {
      title: 'Our Publishing Partners',
      url: '/register',
      icon: 'archive'
    },
    {
      title: 'My Memberships',
      url: '/membershipaccount',
      icon: 'trash'
    },
    {
      title: 'Catalogue',
      url: '/home',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
}
