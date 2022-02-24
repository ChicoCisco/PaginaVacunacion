import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVacunantesComponent } from './ver-vacunantes.component';

describe('VerVacunantesComponent', () => {
  let component: VerVacunantesComponent;
  let fixture: ComponentFixture<VerVacunantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerVacunantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerVacunantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
