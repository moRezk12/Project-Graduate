import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenateelectionsPageComponent } from './senateelections-page.component';

describe('SenateelectionsPageComponent', () => {
  let component: SenateelectionsPageComponent;
  let fixture: ComponentFixture<SenateelectionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenateelectionsPageComponent]
    });
    fixture = TestBed.createComponent(SenateelectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
