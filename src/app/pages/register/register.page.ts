import { Router } from '@angular/router';
import { AuthenticationService } from './../../provider/authentication.service';
import { CommonService } from './../../provider/common.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthenticationService } from 'src/app/provider/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  errorMessage: String = '';
  successMessage: String = '';
  backButtonSubscription: any;

  constructor(
    private authService: AuthenticationService,
    private commonService: CommonService,
    private router: Router,
    private toastCtrl: ToastController,
    private platform: Platform
    ) { }

  ngOnInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/register', true) && this.router.url === '/register') {
        this.router.navigate(['/login']);
      }
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value.email, value.password)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.commonService.toast('Your account has been created. Please log in.');
        // this.successMessage = 'Your account has been created. Please log in.';
        this.router.navigate(['/;login']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

}
