import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentialelectionsPageComponent } from './presidentialelections-page.component';

describe('PresidentialelectionsPageComponent', () => {
  let component: PresidentialelectionsPageComponent;
  let fixture: ComponentFixture<PresidentialelectionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresidentialelectionsPageComponent]
    });
    fixture = TestBed.createComponent(PresidentialelectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
