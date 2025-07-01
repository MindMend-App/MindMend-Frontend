import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnxietyDashboardComponent } from './components/anxiety-dashboard/anxiety-dashboard.component';

const routes: Routes = [
  { path: '', component: AnxietyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnxietyAnalysisRoutingModule {}
