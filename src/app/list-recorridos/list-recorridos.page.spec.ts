import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRecorridosPage } from './list-recorridos.page';

describe('ListRecorridosPage', () => {
  let component: ListRecorridosPage;
  let fixture: ComponentFixture<ListRecorridosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListRecorridosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
