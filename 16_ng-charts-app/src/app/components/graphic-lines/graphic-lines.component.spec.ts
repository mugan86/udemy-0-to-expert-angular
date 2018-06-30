import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicLinesComponent } from './graphic-lines.component';

describe('GraphicLinesComponent', () => {
  let component: GraphicLinesComponent;
  let fixture: ComponentFixture<GraphicLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
