import { Platform, ToastController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private toastCtrl: ToastController,
    private platform: Platform,
    private loadingController: LoadingController
  ) { }

  async toast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      // showCloseButton: false,
      position: 'bottom',
      duration: 2500
    });
    toast.present();
  }

  async showLoader(msg) {
    const loaderToShow = await this.loadingController.create({
      cssClass: 'activity-detail-loading',
      spinner: 'lines',
      message: msg
    }).then((res) => {
      res.present();
      setTimeout(() => {
        console.log('timeout');
        res.dismiss();
      }, 5000);
    });
  }

  async hideLoader() {
    const loaderToShow = await this.loadingController.dismiss();
  }

}
