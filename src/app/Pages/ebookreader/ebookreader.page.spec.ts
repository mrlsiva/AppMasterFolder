import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EbookreaderPage } from './ebookreader.page';

describe('EbookreaderPage', () => {
  let component: EbookreaderPage;
  let fixture: ComponentFixture<EbookreaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookreaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EbookreaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
