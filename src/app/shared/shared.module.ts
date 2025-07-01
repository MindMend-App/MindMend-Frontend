import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [LoadingSpinner],
  imports: [CommonModule, MaterialModule],
  exports: [LoadingSpinner, CommonModule, MaterialModule]
})
export class SharedModule {}
