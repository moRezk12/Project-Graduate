import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatePageComponent } from './senate-page.component';

describe('SenatePageComponent', () => {
  let component: SenatePageComponent;
  let fixture: ComponentFixture<SenatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenatePageComponent]
    });
    fixture = TestBed.createComponent(SenatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
