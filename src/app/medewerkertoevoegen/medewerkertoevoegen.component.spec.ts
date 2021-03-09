import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkertoevoegenComponent } from './medewerkertoevoegen.component';

describe('MedewerkertoevoegenComponent', () => {
  let component: MedewerkertoevoegenComponent;
  let fixture: ComponentFixture<MedewerkertoevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedewerkertoevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedewerkertoevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
