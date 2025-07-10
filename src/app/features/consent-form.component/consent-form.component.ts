import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consent-form.component',
  imports: [],
  templateUrl: './consent-form.component.html',
  styleUrl: './consent-form.component.css'
})
export class ConsentFormComponent {
  constructor(private router: Router) {}

  onAccept() {
    this.router.navigate(['/chat']);
  }

  onCancel() {
    this.router.navigate(['/login']);
  }
}
