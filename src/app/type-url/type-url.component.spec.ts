import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeUrlComponent } from './type-url.component';

describe('TypeUrlComponent', () => {
  let component: TypeUrlComponent;
  let fixture: ComponentFixture<TypeUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
