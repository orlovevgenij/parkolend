import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSchedulerComponent } from './parking-scheduler.component';

describe('ParkingSchedulerComponent', () => {
  let component: ParkingSchedulerComponent;
  let fixture: ComponentFixture<ParkingSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
