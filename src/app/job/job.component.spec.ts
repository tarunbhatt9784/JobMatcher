import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsComponent } from './job.component';

describe('JobsComponent', () => {
  // let component: JobsComponent;
  // let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsComponent ]
    })
    .compileComponents();
  }));

  /* beforeEach(() => {
    const fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); */

  it('should create the jobs component', () => {
    const fixture = TestBed.createComponent(JobsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
