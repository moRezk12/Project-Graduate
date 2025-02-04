import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeElectionComponent } from './type-election.component';

describe('TypeElectionComponent', () => {
  let component: TypeElectionComponent;
  let fixture: ComponentFixture<TypeElectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeElectionComponent]
    });
    fixture = TestBed.createComponent(TypeElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
