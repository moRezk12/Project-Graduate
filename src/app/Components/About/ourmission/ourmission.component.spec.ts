import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmissionComponent } from './ourmission.component';

describe('OurmissionComponent', () => {
  let component: OurmissionComponent;
  let fixture: ComponentFixture<OurmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurmissionComponent]
    });
    fixture = TestBed.createComponent(OurmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
