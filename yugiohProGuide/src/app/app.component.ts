import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {CardsServiceService} from './service/cards-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Search',
      url: '/list/0',
      icon: 'search'
    },
    {
      title: 'Archetypes',
      url: '/archetypes',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cards:CardsServiceService
  ) {
    if(this.platform.is("desktop")){
      this.appPages.push({
        title: 'Deck Builder',
        url: '/deck-builder',
        icon: 'ios-paper'
      });
    }
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.cards.initialstate();
      this.splashScreen.hide();
    });
  }
}
