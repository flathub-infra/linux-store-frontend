import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private titleService: Title,
    private metaService: Meta) { }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setDescription(description: string){
    this.metaService.updateTag({ name: 'description', content: description });
  }

  setKeywords(keywords: string){
    this.metaService.updateTag({ name: 'keywords', content: keywords });
  }
  
}
