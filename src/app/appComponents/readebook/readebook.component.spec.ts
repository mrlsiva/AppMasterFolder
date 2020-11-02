import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadebookComponent } from './readebook.component';

describe('ReadebookComponent', () => {
  let component: ReadebookComponent;
  let fixture: ComponentFixture<ReadebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadebookComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
