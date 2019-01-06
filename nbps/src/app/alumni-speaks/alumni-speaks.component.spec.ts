import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniSpeaksComponent } from './alumni-speaks.component';

describe('AlumniSpeaksComponent', () => {
  let component: AlumniSpeaksComponent;
  let fixture: ComponentFixture<AlumniSpeaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniSpeaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniSpeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
