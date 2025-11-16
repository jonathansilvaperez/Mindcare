import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoevaluacionPage } from './autoevaluacion.page';

describe('AutoevaluacionPage', () => {
  let component: AutoevaluacionPage;
  let fixture: ComponentFixture<AutoevaluacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoevaluacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
