import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWifiComponent } from './type-wifi.component';

describe('TypeWifiComponent', () => {
  let component: TypeWifiComponent;
  let fixture: ComponentFixture<TypeWifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeWifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
