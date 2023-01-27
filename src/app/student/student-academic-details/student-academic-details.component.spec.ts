import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAcademicDetailsComponent } from './student-academic-details.component';

describe('StudentAcademicDetailsComponent', () => {
  let component: StudentAcademicDetailsComponent;
  let fixture: ComponentFixture<StudentAcademicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAcademicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAcademicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
