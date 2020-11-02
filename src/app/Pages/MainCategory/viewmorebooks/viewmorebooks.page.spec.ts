import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewmorebooksPage } from './viewmorebooks.page';

describe('ViewmorebooksPage', () => {
  let component: ViewmorebooksPage;
  let fixture: ComponentFixture<ViewmorebooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmorebooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewmorebooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
