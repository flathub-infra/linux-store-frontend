import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(
    private titleService: Title,
    private metaService: Meta) { }

  setPageMetadata(title: string = '', description: string = '', image: string = '', prerender_status_code: string = '200') {

    title = title;

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });

    this.metaService.updateTag({ name: 'og:title', content: title });
    this.metaService.updateTag({ name: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'og:image', content: image });
    this.metaService.updateTag({ name: 'og:url', content: window.location.href });
    this.metaService.updateTag({ name: 'og:description', content: description });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    if (prerender_status_code != '200') {
      this.metaService.updateTag({ name: 'prerender-status-code', content: prerender_status_code});
    };
  }
}
