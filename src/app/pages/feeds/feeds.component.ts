import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'store-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  constructor(
    private seoService: SeoService) {
    this.setPageMetadata();
  }

  ngOnInit() {
  }

  setPageMetadata() {

    const imageUrl: string = window.location.protocol + '//' + window.location.hostname + ':' +
      window.location.port + '/assets/badges/flathub-badge-en.png'

    this.seoService.setPageMetadata(
      'RSS—Flathub',
      'Subscribe to RSS feeds from Flathub',
      imageUrl);

  }
}

