import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PericiaJudicialAmbientalComponent } from './pericia-judicial-ambiental.component';

describe('PericiaJudicialAmbientalComponent', () => {
  let component: PericiaJudicialAmbientalComponent;
  let fixture: ComponentFixture<PericiaJudicialAmbientalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PericiaJudicialAmbientalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PericiaJudicialAmbientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
