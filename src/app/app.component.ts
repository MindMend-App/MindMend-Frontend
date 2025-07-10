import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { filter } from 'rxjs';
import { routes } from './app.routes';
import { CommonModule }             from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {LoadingSpinnerComponent} from './shared/components/loading-spinner/loading-spinner.component';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    LoadingSpinnerComponent,
    MatIconModule,
    LoadingSpinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  showLayout = true;
  isMobile = window.innerWidth <= 600;
  isLoading  = true;

  constructor(private router: Router) {}

  ngOnInit() {
    const hideOn = ['/login', '/consent'];
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1000);
    this.router.events.pipe(
      filter(e =>
        e instanceof NavigationStart   ||
        e instanceof NavigationEnd     ||
        e instanceof NavigationCancel  ||
        e instanceof NavigationError
      )
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    });
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const hideOn = ['/login', '/consent'];
        this.showLayout = !hideOn.includes(e.urlAfterRedirects);
        if (this.isMobile && this.sidenav) {
          this.sidenav.close();
        }
      });

  }

  // Escuchar cambios de tamaño de ventana
  @HostListener('window:resize', ['$event'])
  onResize(evt: UIEvent) {
        this.isMobile = (evt.target as Window).innerWidth <= 600;
        // Si pasamos a desktop, abrimos el sidebar
    if (!this.isMobile && this.sidenav) {
      this.sidenav.open();
    }
      }

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
