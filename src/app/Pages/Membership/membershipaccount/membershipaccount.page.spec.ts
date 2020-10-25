import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembershipaccountPage } from './membershipaccount.page';

describe('MembershipaccountPage', () => {
  let component: MembershipaccountPage;
  let fixture: ComponentFixture<MembershipaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipaccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembershipaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
