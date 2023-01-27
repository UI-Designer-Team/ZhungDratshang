import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseTakenComponent } from './teacher-course-taken.component';

describe('TeacherCourseTakenComponent', () => {
  let component: TeacherCourseTakenComponent;
  let fixture: ComponentFixture<TeacherCourseTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCourseTakenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCourseTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
