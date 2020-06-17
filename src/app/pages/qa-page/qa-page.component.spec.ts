import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QAPageComponent } from './qa-page.component';

describe('QAPageComponent', () => {
  let component: QAPageComponent;
  let fixture: ComponentFixture<QAPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QAPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
