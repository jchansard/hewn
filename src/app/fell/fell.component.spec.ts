import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellComponent } from './fell.component';

describe('FellComponent', () => {
  let component: FellComponent;
  let fixture: ComponentFixture<FellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
