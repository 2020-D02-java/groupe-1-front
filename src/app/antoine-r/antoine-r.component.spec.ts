import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoineRComponent } from './antoine-r.component';

describe('AntoineRComponent', () => {
  let component: AntoineRComponent;
  let fixture: ComponentFixture<AntoineRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoineRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoineRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
