import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  backButtonSubscription: any;
  uid: any;
  email: any;

  constructor(
    private platform: Platform,
    private router: Router
  ) {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');

    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/tabs/tab2', true) && this.router.url === '/tabs/tab2') {
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

}
