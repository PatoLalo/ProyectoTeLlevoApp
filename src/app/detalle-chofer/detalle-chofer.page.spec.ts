import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleChoferPage } from './detalle-chofer.page';

describe('DetalleChoferPage', () => {
  let component: DetalleChoferPage;
  let fixture: ComponentFixture<DetalleChoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
