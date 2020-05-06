import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSmsComponent } from './type-sms.component';

describe('TypeSmsComponent', () => {
  let component: TypeSmsComponent;
  let fixture: ComponentFixture<TypeSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
