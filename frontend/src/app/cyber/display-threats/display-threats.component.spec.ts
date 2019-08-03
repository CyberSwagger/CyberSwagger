import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayThreatsComponent } from './display-threats.component';

describe('DisplayThreatsComponent', () => {
  let component: DisplayThreatsComponent;
  let fixture: ComponentFixture<DisplayThreatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayThreatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayThreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
