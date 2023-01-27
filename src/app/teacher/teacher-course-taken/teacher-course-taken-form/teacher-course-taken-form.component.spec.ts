import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseTakenFormComponent } from './teacher-course-taken-form.component';

describe('TeacherCourseTakenFormComponent', () => {
  let component: TeacherCourseTakenFormComponent;
  let fixture: ComponentFixture<TeacherCourseTakenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCourseTakenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCourseTakenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
