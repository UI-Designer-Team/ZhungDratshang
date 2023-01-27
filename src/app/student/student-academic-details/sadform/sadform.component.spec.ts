import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SADFormComponent } from './sadform.component';

describe('SADFormComponent', () => {
  let component: SADFormComponent;
  let fixture: ComponentFixture<SADFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SADFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SADFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
