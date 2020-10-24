import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndividualcategoryPage } from './individualcategory.page';

describe('IndividualcategoryPage', () => {
  let component: IndividualcategoryPage;
  let fixture: ComponentFixture<IndividualcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualcategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
