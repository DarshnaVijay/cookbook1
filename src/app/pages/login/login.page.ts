import { CommonService } from './../../provider/common.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../provider/authentication.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  password: any;
  errorMessage: '';
  successMessage: '';
  backButtonSubscription: any;

  constructor(
    private authService: AuthenticationService,
    private coomonService: CommonService,
    private router: Router,
    private loadingController: LoadingController,
    private platform: Platform
    ) { }

  ngOnInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/login', true) && this.router.url === '/login') {
        navigator['app'].exitApp();
      }
    });
    localStorage.clear();
    localStorage.removeItem('email');
    localStorage.removeItem('uid');
  }

  login(form){
    this.coomonService.showLoader('');
    this.authService.loginUser(form.email, form.password)
    .then(res => {
      console.log(JSON.stringify(res));
      console.log('uid : ' + res.user.uid);
      console.log('email: ' + JSON.stringify(res.user.email));
      localStorage.setItem('uid', res.user.uid);
      localStorage.setItem('email', res.user.email);
      this.errorMessage = '';
      this.coomonService.hideLoader();
      this.router.navigate(['/tabs/tab1']);
    }, err => {
      this.coomonService.hideLoader();
      this.errorMessage = err.message;
    });
  }

}
