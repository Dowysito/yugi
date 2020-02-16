import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {firebaseConfig} from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {CardsServiceService} from './service/cards-service.service';
import {AgregarPageModule} from './agregar/agregar.module';
import {AgregarPage} from './agregar/agregar.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    CardsServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
