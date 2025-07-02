import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AnxietyAnalysisRoutingModule } from './anxiety-analysis-routing.module';
import { AnxietyDashboardComponent } from './components/anxiety-dashboard/anxiety-dashboard.component';

@NgModule({
  imports: [SharedModule, AnxietyAnalysisRoutingModule, AnxietyDashboardComponent]
})
export class AnxietyAnalysisModule {}
