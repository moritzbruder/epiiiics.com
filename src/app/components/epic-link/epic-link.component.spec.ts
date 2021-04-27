import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicLinkComponent } from './epic-link.component';

describe('EpicLinkComponent', () => {
  let component: EpicLinkComponent;
  let fixture: ComponentFixture<EpicLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
