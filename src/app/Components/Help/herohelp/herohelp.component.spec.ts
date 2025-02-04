import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerohelpComponent } from './herohelp.component';

describe('HerohelpComponent', () => {
  let component: HerohelpComponent;
  let fixture: ComponentFixture<HerohelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerohelpComponent]
    });
    fixture = TestBed.createComponent(HerohelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
