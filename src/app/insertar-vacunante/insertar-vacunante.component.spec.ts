import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarVacunanteComponent } from './insertar-vacunante.component';

describe('InsertarVacunanteComponent', () => {
  let component: InsertarVacunanteComponent;
  let fixture: ComponentFixture<InsertarVacunanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarVacunanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarVacunanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
