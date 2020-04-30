import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouComponent } from './bou.component';

describe('BouComponent', () => {
  let component: BouComponent;
  let fixture: ComponentFixture<BouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
