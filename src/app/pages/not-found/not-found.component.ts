import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})

export class NotFoundComponent implements OnInit {
  constructor(
    private seoService: SeoService
  ) {}

  setPageMetadata() {
    this.seoService.setPageMetadata(
        '404 - Page not found',
        'Page not found',
        '',
        '404'
    );
  }

  ngOnInit() {
    this.setPageMetadata();
  }
}
