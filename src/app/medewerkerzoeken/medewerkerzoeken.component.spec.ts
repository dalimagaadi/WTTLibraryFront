import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkerzoekenComponent } from './medewerkerzoeken.component';

describe('MedewerkerzoekenComponent', () => {
  let component: MedewerkerzoekenComponent;
  let fixture: ComponentFixture<MedewerkerzoekenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedewerkerzoekenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedewerkerzoekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
