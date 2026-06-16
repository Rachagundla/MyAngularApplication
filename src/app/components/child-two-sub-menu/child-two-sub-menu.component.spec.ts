import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoSubMenuComponent } from './child-two-sub-menu.component';

describe('ChildTwoSubMenuComponent', () => {
  let component: ChildTwoSubMenuComponent;
  let fixture: ComponentFixture<ChildTwoSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTwoSubMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwoSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
