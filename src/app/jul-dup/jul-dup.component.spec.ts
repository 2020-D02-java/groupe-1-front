import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulDupComponent } from './jul-dup.component';

describe('JulDupComponent', () => {
  let component: JulDupComponent;
  let fixture: ComponentFixture<JulDupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulDupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulDupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
