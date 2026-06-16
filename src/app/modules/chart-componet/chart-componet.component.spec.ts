import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponetComponent } from './chart-componet.component';

describe('ChartComponetComponent', () => {
  let component: ChartComponetComponent;
  let fixture: ComponentFixture<ChartComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartComponetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
