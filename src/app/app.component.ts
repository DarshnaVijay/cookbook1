import { Router } from '@angular/router';
import { IonRouterOutlet, Platform, ToastController } from '@ionic/angular';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import firebaseConfig from '../app/config/firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private toastCtrl: ToastController,
    private router: Router,
    private statusBar: StatusBar,
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#550454');
      this.statusBar.styleLightContent();
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      this.backButtonEvent();

      localStorage.getItem('uid');
      localStorage.getItem('email');
    });
  }

  // active hardware back button
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        /* if (this.router.url != '/tabs/home') {
           await this.router.navigate(['/tabs/home']);
         } else*/
        if (this.router.url === '/tabs/tab1') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.toast('Press again to exit');
            /*this.toast.show('Press again to exit', '3000', 'bottom').subscribe(
              toast => {
                console.log(toast);
              }
            );*/
          } else {
            navigator['app'].exitApp();
          }
        } else if (outlet && outlet.canGoBack()) {
          outlet.pop();
        }
      });
    });
  }

  async toast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      // showCloseButton: false,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }
}
