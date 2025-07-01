import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyDashboard } from './anxiety-dashboard.component';

describe('AnxietyDashboard', () => {
  let component: AnxietyDashboard;
  let fixture: ComponentFixture<AnxietyDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnxietyDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnxietyDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
