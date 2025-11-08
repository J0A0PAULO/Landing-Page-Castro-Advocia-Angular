import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosResolvidos } from './casos-resolvidos';

describe('CasosResolvidos', () => {
  let component: CasosResolvidos;
  let fixture: ComponentFixture<CasosResolvidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasosResolvidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasosResolvidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
