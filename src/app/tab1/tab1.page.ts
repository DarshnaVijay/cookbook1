import { NavigationExtras, Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { AuthenticationService } from '../provider/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  userEmail: string;
  email: string;
  uid: string;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');
  }

  cuisineArray = [
    {id: '2', title: 'Breakfast', image: 'assets/img/image2.png'},
    {id: '3', title: 'Lunch', image: 'assets/img/image3.png'},
    {id: '4', title: 'Chinese', image: 'assets/img/image4.png'},
    {id: '5', title: 'Dessert', image: 'assets/img/image5.png'},
    {id: '6', title: 'Dinner', image: 'assets/img/image6.png'},
    {id: '7', title: 'Drinks', image: 'assets/img/image7.png'},
  ];

  ngOnInit() {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');
    console.log('email ' + this.email);
    /*t;
    this.authService.userDetails().subscribe(res => {
      console.log('res', JSON.stringify(res));
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.router.navigate(['/login']);
      }
    }, err => {
      console.log('err', err);
    });*/
  }

  ionViewWillEnter() {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');
  }

  ngAfterViewInit() {
    this.uid = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');

    /*events.subscribe('user:updated', () => {
      this.updateInfos = true;
      this.ngOnInit();
    });*/
  }

  cuisines(id, title) {
    const navigationExtras: NavigationExtras = {
      state: {
        cuisineId: id,
        cuisineName: title
      }
    };
    this.router.navigate(['/dishes'], navigationExtras);
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
