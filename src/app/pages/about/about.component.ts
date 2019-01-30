import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'store-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) {
    this.setPageMetadata();
  }

  ngOnInit() { }

  setPageMetadata() {

    const imageUrl: string = window.location.protocol + '//' + window.location.hostname + ':' +
      window.location.port + '/assets/themes/flathub/flathub-logo.png'

    this.seoService.setPageMetadata(
      'About Flathub—Flathub',
      'Flathub aims to be the place to get and distribute apps for Linux. It is powered by Flatpak which allows Flathub apps to run on almost any Linux distribution.',
      imageUrl);

  }



}
