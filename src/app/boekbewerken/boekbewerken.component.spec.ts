import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoekbewerkenComponent } from './boekbewerken.component';

describe('BoekbewerkenComponent', () => {
  let component: BoekbewerkenComponent;
  let fixture: ComponentFixture<BoekbewerkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoekbewerkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoekbewerkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
