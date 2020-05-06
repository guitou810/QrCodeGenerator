import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTexteComponent } from './type-texte.component';

describe('TypeTexteComponent', () => {
  let component: TypeTexteComponent;
  let fixture: ComponentFixture<TypeTexteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTexteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
