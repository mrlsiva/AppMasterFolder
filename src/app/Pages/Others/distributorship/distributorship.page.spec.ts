import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistributorshipPage } from './distributorship.page';

describe('DistributorshipPage', () => {
  let component: DistributorshipPage;
  let fixture: ComponentFixture<DistributorshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorshipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistributorshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
