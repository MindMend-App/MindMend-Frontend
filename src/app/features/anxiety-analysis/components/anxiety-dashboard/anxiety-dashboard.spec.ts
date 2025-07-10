import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyDashboardComponent } from './anxiety-dashboard.component';

describe('AnxietyDashboard', () => {
  let component: AnxietyDashboardComponent;
  let fixture: ComponentFixture<AnxietyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnxietyDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnxietyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
