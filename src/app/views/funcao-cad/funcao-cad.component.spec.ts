import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoCadComponent } from './funcao-cad.component';

describe('FuncaoCadComponent', () => {
  let component: FuncaoCadComponent;
  let fixture: ComponentFixture<FuncaoCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncaoCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncaoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
