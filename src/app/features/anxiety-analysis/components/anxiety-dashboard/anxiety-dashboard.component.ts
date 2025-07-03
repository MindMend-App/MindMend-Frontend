import { Component, OnInit }      from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RouterModule, Router }   from '@angular/router';
import { MatToolbarModule }       from '@angular/material/toolbar';
import { MatCardModule }          from '@angular/material/card';

@Component({
  selector: 'app-anxiety-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule
  ],
  templateUrl: './anxiety-dashboard.component.html',
  styleUrls: ['./anxiety-dashboard.component.css']
})
export class AnxietyDashboardComponent implements OnInit {
  result: { label: string; score: number } | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    // usando corchetes para evitar el error TS4111
    const analysis = (nav?.extras.state as any)?.['analysis'];
    this.result = analysis ?? null;

    if (!this.result) {
      this.router.navigateByUrl('/');
    }
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
