import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMailComponent } from './type-mail.component';

describe('TypeMailComponent', () => {
  let component: TypeMailComponent;
  let fixture: ComponentFixture<TypeMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
