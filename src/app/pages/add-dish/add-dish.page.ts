import { CommonService } from './../../provider/common.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.page.html',
  styleUrls: ['./add-dish.page.scss'],
})
export class AddDishPage implements OnInit {

  constructor(
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  addDish(form) {
    this.commonService.toast('Your recipe added succesfully');
    this.router.navigate(['/tabs/tab3']);
  }

}
