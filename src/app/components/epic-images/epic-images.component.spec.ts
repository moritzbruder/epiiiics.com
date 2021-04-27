import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicImagesComponent } from './epic-images.component';

describe('EpicImagesComponent', () => {
  let component: EpicImagesComponent;
  let fixture: ComponentFixture<EpicImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
