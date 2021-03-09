import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoekaanvraagComponent } from './boekaanvraag.component';

describe('BoekaanvraagComponent', () => {
  let component: BoekaanvraagComponent;
  let fixture: ComponentFixture<BoekaanvraagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoekaanvraagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoekaanvraagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
