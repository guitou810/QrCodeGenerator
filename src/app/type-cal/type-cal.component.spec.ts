import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCalComponent } from './type-cal.component';

describe('TypeCalComponent', () => {
  let component: TypeCalComponent;
  let fixture: ComponentFixture<TypeCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
