import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureGuideComponent } from './structure-guide.component';

describe('StructureGuideComponent', () => {
  let component: StructureGuideComponent;
  let fixture: ComponentFixture<StructureGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
