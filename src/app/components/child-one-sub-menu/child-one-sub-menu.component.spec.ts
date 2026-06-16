import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneSubMenuComponent } from './child-one-sub-menu.component';

describe('ChildOneSubMenuComponent', () => {
  let component: ChildOneSubMenuComponent;
  let fixture: ComponentFixture<ChildOneSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOneSubMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOneSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
