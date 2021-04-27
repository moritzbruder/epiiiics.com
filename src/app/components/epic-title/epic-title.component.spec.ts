import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicTitleComponent } from './epic-title.component';

describe('EpicTitleComponent', () => {
  let component: EpicTitleComponent;
  let fixture: ComponentFixture<EpicTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
