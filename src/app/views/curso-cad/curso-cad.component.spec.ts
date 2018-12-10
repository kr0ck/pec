import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCadComponent } from './curso-cad.component';

describe('CursoCadComponent', () => {
  let component: CursoCadComponent;
  let fixture: ComponentFixture<CursoCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
