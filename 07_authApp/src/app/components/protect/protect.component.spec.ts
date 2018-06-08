import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectComponent } from './protect.component';

describe('ProtectComponent', () => {
  let component: ProtectComponent;
  let fixture: ComponentFixture<ProtectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
