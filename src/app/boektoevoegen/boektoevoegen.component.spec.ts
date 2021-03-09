import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoektoevoegenComponent } from './boektoevoegen.component';

describe('BoektoevoegenComponent', () => {
  let component: BoektoevoegenComponent;
  let fixture: ComponentFixture<BoektoevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoektoevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoektoevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
