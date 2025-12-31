import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentors } from './mentors';

describe('Mentors', () => {
  let component: Mentors;
  let fixture: ComponentFixture<Mentors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mentors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mentors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
