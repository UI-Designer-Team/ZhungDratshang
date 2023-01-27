import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarkPerCourseComponent } from './student-mark-per-course.component';

describe('StudentMarkPerCourseComponent', () => {
  let component: StudentMarkPerCourseComponent;
  let fixture: ComponentFixture<StudentMarkPerCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMarkPerCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMarkPerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
