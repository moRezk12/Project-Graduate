import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainfeaturesComponent } from './mainfeatures.component';

describe('MainfeaturesComponent', () => {
  let component: MainfeaturesComponent;
  let fixture: ComponentFixture<MainfeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainfeaturesComponent]
    });
    fixture = TestBed.createComponent(MainfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
