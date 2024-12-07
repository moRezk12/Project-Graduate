import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleassemblyPageComponent } from './peopleassembly-page.component';

describe('PeopleassemblyPageComponent', () => {
  let component: PeopleassemblyPageComponent;
  let fixture: ComponentFixture<PeopleassemblyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleassemblyPageComponent]
    });
    fixture = TestBed.createComponent(PeopleassemblyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
