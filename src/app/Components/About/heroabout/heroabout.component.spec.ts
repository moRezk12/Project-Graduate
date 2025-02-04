import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroaboutComponent } from './heroabout.component';

describe('HeroaboutComponent', () => {
  let component: HeroaboutComponent;
  let fixture: ComponentFixture<HeroaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroaboutComponent]
    });
    fixture = TestBed.createComponent(HeroaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
