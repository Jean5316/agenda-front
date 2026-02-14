import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContato } from './criar-contato';

describe('CriarContato', () => {
  let component: CriarContato;
  let fixture: ComponentFixture<CriarContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
