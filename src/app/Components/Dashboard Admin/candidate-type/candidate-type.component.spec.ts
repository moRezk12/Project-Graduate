import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTypeComponent } from './candidate-type.component';

describe('CandidateTypeComponent', () => {
  let component: CandidateTypeComponent;
  let fixture: ComponentFixture<CandidateTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateTypeComponent]
    });
    fixture = TestBed.createComponent(CandidateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
