import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  // Declare the variable (in this case and initialize it with false)
  isItemAvailable = false;
  items: any = [];
  // for storing the returned subscription
  backButtonSubscription;

  constructor(
    private router: Router,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/search', true) && this.router.url === '/search') {
        this.router.navigate(['/tabs/tab1']);
      }
    });
  }

  initializeItems(){
    this.items = [
      {name: 'MOMOS'},
      {name: 'POHA'},
      {name: 'FRUIT RAYTA'},
      {name: 'MIXED VEGETABLE DAL'},
      {name: 'GARLIC TAWA NAAN'},
      {name: 'CHOW MEIN'},
      {name: 'MANCHURIAN'},
      {name: 'CHOCOLATE SHAKE'},
    ];
}

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.items = this.items.filter((item) => {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    } else {
        this.isItemAvailable = false;
    }
  }

  singleDish(name) {
    const navigationExtras: NavigationExtras = {
      state: {
        dishName: name
      }
    };
    this.router.navigate(['/single-dish'], navigationExtras);
  }

}
