import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreendimentoDetalheComponent } from './empreendimento-detalhe.component';

describe('EmpreendimentoDetalheComponent', () => {
  let component: EmpreendimentoDetalheComponent;
  let fixture: ComponentFixture<EmpreendimentoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpreendimentoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreendimentoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
