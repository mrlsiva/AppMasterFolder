import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadselectedbookPage } from './readselectedbook.page';

describe('ReadselectedbookPage', () => {
  let component: ReadselectedbookPage;
  let fixture: ComponentFixture<ReadselectedbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadselectedbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadselectedbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
