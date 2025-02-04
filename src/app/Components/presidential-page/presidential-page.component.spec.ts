import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentialPageComponent } from './presidential-page.component';

describe('PresidentialPageComponent', () => {
  let component: PresidentialPageComponent;
  let fixture: ComponentFixture<PresidentialPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresidentialPageComponent]
    });
    fixture = TestBed.createComponent(PresidentialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
