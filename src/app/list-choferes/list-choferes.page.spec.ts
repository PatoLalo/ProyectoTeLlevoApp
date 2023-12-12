import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListChoferesPage } from './list-choferes.page';

describe('ListChoferesPage', () => {
  let component: ListChoferesPage;
  let fixture: ComponentFixture<ListChoferesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListChoferesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
