import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'store-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta) {

    this.titleService.setTitle("About Flathub | Flathub");
    this.metaService.updateTag({ name: 'description', content: 'Flathub aims to be the place to get and distribute apps for Linux. It is powered by Flatpak which allows Flathub apps to run on almost any Linux distribution.' });
    this.metaService.updateTag({ name: 'keywords', content: 'flathub,flatpak' });

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }

}
