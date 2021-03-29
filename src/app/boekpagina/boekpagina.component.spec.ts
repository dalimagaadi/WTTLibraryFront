import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoekpaginaComponent } from './boekpagina.component';

describe('BoekpaginaComponent', () => {
  let component: BoekpaginaComponent;
  let fixture: ComponentFixture<BoekpaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoekpaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoekpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
