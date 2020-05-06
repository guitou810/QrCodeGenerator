import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMapsComponent } from './type-maps.component';

describe('TypeMapsComponent', () => {
  let component: TypeMapsComponent;
  let fixture: ComponentFixture<TypeMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
