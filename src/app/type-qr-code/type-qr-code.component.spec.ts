import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeQrCodeComponent } from './type-qr-code.component';

describe('TypeQrCodeComponent', () => {
  let component: TypeQrCodeComponent;
  let fixture: ComponentFixture<TypeQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
