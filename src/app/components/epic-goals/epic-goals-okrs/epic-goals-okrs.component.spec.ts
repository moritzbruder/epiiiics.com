import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicGoalsOkrsComponent } from './epic-goals-okrs.component';

describe('EpicGoalsOkrsComponent', () => {
  let component: EpicGoalsOkrsComponent;
  let fixture: ComponentFixture<EpicGoalsOkrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicGoalsOkrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicGoalsOkrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
