import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetailsFormComponent } from './teacher-details-form.component';

describe('TeacherDetailsFormComponent', () => {
  let component: TeacherDetailsFormComponent;
  let fixture: ComponentFixture<TeacherDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
