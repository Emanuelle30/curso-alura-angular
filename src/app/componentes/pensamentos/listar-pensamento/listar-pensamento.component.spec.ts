import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamentoComponent } from './listar-pensamento.component';

describe('ListarPensamentoComponent', () => {
  let component: ListarPensamentoComponent;
  let fixture: ComponentFixture<ListarPensamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPensamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
