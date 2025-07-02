import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-anxiety-dashboard',
  standalone: true,
  templateUrl: './anxiety-dashboard.component.html',
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  styleUrls: ['./anxiety-dashboard.component.css']
})
export class AnxietyDashboardComponent implements OnInit {
  score = 0;
  constructor() {}

  ngOnInit() {
    this.score = 42;
  }
}
