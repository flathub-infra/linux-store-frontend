import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'store-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    private seoService: SeoService) {

    this.setPageMetadata();

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  setPageMetadata() {

    const imageUrl: string = window.location.protocol + '//' + window.location.hostname + ':' +
      window.location.port + '/assets/themes/flathub/flathub-screenshot.png'

    this.seoService.setPageMetadata(
      'About Flathub',
      'Flathub aims to be the place to get and distribute apps for Linux. It is powered by Flatpak which allows Flathub apps to run on almost any Linux distribution.',
      imageUrl);

  }



}
