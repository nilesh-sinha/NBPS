import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolHistoryComponent } from './school-history.component';

describe('SchoolHistoryComponent', () => {
  let component: SchoolHistoryComponent;
  let fixture: ComponentFixture<SchoolHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
