import { CommonService } from './../provider/common.service';
import { Router, NavigationExtras } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  backButtonSubscription: any;
  uid: any;
  email: any;

  constructor(
    private platform: Platform,
    private router: Router,
    private toastCtrl: ToastController,
    private commonService: CommonService
  ) {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');

    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/tabs/tab3', true) && this.router.url === '/tabs/tab3') {
        this.router.navigate(['/tabs/tab1']);
      }
    });
  }

  ionViewWillEnter() {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');
  }

  ngAfterViewInit() {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');
  }

  addDish() {
    if (this.uid !== '' && this.uid != null) {
      this.router.navigate(['/add-dish']);
    } else {
      this.commonService.toast('Please Login First!!');
    }
  }

  goRecipe(name) {
    const navigate: NavigationExtras = {
      state: {
        dishName: name,
        pageName: 'Tab3'
      }
    };
    this.router.navigate(['/single-dish'], navigate);
  }

}
