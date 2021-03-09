import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportagesComponent } from './rapportages.component';

describe('RapportagesComponent', () => {
  let component: RapportagesComponent;
  let fixture: ComponentFixture<RapportagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
