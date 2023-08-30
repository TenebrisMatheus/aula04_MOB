import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tela3Page } from './tela3.page';

describe('Tela3Page', () => {
  let component: Tela3Page;
  let fixture: ComponentFixture<Tela3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tela3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
