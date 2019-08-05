import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showShadow = false;

  constructor(
    public router: Router
  ) {
  }

  onSearch(searchTerm: string) {
    if (typeof searchTerm === 'string' && searchTerm && searchTerm.trim() && searchTerm.trim().length > 2) {
      this.router.navigate(['apps/search', searchTerm]);
    }
  }

}
