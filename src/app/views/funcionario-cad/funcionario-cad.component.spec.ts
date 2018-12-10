import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCadComponent } from './funcionario-cad.component';

describe('FuncionarioCadComponent', () => {
  let component: FuncionarioCadComponent;
  let fixture: ComponentFixture<FuncionarioCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
