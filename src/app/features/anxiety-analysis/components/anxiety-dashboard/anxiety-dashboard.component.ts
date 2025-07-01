import { Component, OnInit } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-anxiety-dashboard',
  templateUrl: './anxiety-dashboard.component.html',
  imports: [
    MatToolbar
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
