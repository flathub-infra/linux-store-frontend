import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'store-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
})
export class BadgesComponent implements OnInit {
// tslint:disable:quotemark
  badgeExampleCode =
    "<a href='https://flathub.org/apps/details/org.gimp.GIMP'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>";
  badgeExampleCodeMoinMoin =
    '[[https://flathub.org/apps/details/org.gimp.GIMP|{{https://flathub.org/assets/badges/flathub-badge-en.png|Download on Flathub|width=240,align=middle}}]]';

  constructor(private seoService: SeoService) {
    this.setPageMetadata();
  }

  ngOnInit() {}

  setPageMetadata() {
    const imageUrl: string =
      window.location.protocol +
      '//' +
      window.location.hostname +
      ':' +
      window.location.port +
      '/assets/badges/flathub-badge-en.png';

    this.seoService.setPageMetadata(
      'Flathub Official Badges—Flathub',
      'Official badges to promote your application on Flathub',
      imageUrl
    );
  }
}
