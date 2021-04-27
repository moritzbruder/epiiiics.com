import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicDescriptionComponent } from './epic-description.component';

describe('EpicDescriptionComponent', () => {
  let component: EpicDescriptionComponent;
  let fixture: ComponentFixture<EpicDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
