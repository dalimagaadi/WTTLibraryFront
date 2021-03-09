import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoekenzoekenComponent } from './boekenzoeken.component';

describe('BoekenzoekenComponent', () => {
  let component: BoekenzoekenComponent;
  let fixture: ComponentFixture<BoekenzoekenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoekenzoekenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoekenzoekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
