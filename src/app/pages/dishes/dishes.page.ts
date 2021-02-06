import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.page.html',
  styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {

  cuisineId: any;
  cuisineName: any;
  backButtonSubscription;
  dishesArray: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platform: Platform

  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cuisineId = this.router.getCurrentNavigation().extras.state.cuisineId;
        this.cuisineName = this.router.getCurrentNavigation().extras.state.cuisineName;
      }
    });
   }

  ngOnInit() {

    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/dishes', true) && this.router.url === '/dishes') {
        this.router.navigate(['/tabs/tab1']);
      }
    });

    if (this.cuisineName === 'Breakfast') {
      this.dishesArray = [
        {id: '1', name: 'POHA', image: 'assets/img/dishes/poha.jpg'},
        {id: '2', name: 'MOMOS', image: 'assets/img/dishes/momos.jpg'},
        {id: '3', name: 'MIXED VEGETABLE DAL', image: 'assets/img/dishes/daal1.jpg'},
      ];
    } else if (this.cuisineName === 'Lunch') {
      this.dishesArray = [
        {id: '1', name: 'MIXED VEGETABLE DAL', image: 'assets/img/dishes/daal1.jpg'},
        {id: '2', name: 'FRUIT RAYTA', image: 'assets/img/dishes/fruitrayta.jpg'},
        {id: '3', name: 'GARLIC TAWA NAAN', image: 'assets/img/dishes/tawaroti.jpg'},
      ];
    } else if (this.cuisineName === 'Chinese') {
      this.dishesArray = [
        {id: '1', name: 'CHOW MEIN', image: 'assets/img/dishes/img1.jpg'},
        {id: '2', name: 'MOMOS', image: 'assets/img/dishes/momos.jpg'},
        {id: '3', name: 'MANCHURIAN', image: 'assets/img/dishes/manchurian.jpg'}
      ];
    } else if (this.cuisineName === 'Dessert') {
      this.dishesArray = [
        {id: '1', name: 'CHOCOLATE SHAKE', image: 'assets/img/dishes/choclate.jpg'},
        {id: '2', name: 'FRUIT RAYTA', image: 'assets/img/dishes/fruitrayta.jpg'},
      ];
    } else if (this.cuisineName === 'Dinner') {
      this.dishesArray = [
        {id: '1', name: 'GARLIC TAWA NAAN', image: 'assets/img/dishes/tawaroti.jpg'},
        {id: '2', name: 'MIXED VEGETABLE DAL', image: 'assets/img/dishes/daal1.jpg'},
        {id: '3', name: 'FRUIT RAYTA', image: 'assets/img/dishes/fruitrayta.jpg'},
        {id: '4', name: 'CHOW MEIN', image: 'assets/img/dishes/img1.jpg'}
      ];
    } else if (this.cuisineName === 'Drinks') {
      this.dishesArray = [
        {id: '1', name: 'CHOCOLATE SHAKE', image: 'assets/img/dishes/choclate.jpg'},
        {id: '2', name: 'FRUIT RAYTA', image: 'assets/img/dishes/fruitrayta.jpg'},
      ];
    }
  }

  dishes(id, name) {
    const navigationExtras: NavigationExtras = {
      state: {
        dishId: id,
        dishName: name
      }
    };
    this.router.navigate(['/single-dish'], navigationExtras);
  }

}
