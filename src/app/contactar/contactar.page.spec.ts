import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactarPage } from './contactar.page';

describe('ContactarPage', () => {
  let component: ContactarPage;
  let fixture: ComponentFixture<ContactarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
