import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComboboxPage } from './combobox.page';

describe('ComboboxPage', () => {
  let component: ComboboxPage;
  let fixture: ComponentFixture<ComboboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
