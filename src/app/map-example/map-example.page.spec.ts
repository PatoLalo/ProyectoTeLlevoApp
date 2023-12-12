import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapExamplePage } from './map-example.page';

describe('MapExamplePage', () => {
  let component: MapExamplePage;
  let fixture: ComponentFixture<MapExamplePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
