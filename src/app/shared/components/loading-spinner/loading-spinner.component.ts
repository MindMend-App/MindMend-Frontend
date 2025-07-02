import { Component } from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-loading-spinner',
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {

}
