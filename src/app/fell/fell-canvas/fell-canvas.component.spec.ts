import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellCanvasComponent } from './fell-canvas.component';

describe('FellCanvasComponent', () => {
  let component: FellCanvasComponent;
  let fixture: ComponentFixture<FellCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
