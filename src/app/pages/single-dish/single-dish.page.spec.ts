import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleDishPage } from './single-dish.page';

describe('SingleDishPage', () => {
  let component: SingleDishPage;
  let fixture: ComponentFixture<SingleDishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleDishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
