import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SebComponentComponent } from './seb-component.component';

describe('SebComponentComponent', () => {
  let component: SebComponentComponent;
  let fixture: ComponentFixture<SebComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SebComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
