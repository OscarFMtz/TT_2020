import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioService } from './usuario.service';
import { Tab3Page } from '';
import { MapsPage } from '';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  rootPage: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public _usuarioServe: UsuarioService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this._usuarioServe.cargarStorage().then( existe => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        if(existe){
          this.rootPage = HomePage;
        }else{
          this.rootPage = Tab3Page;
        }
      
      });
      
    });
  }
  
}
