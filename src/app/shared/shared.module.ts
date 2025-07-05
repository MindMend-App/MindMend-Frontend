import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    LoadingSpinnerComponent,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    LoadingSpinnerComponent,
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule {}
