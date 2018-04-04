import { Component, OnInit, Input } from '@angular/core';

import { App } from '../../shared/app.model';

@Component({
  selector: 'store-app-details-extra-info',
  templateUrl: './app-details-extra-info.component.html',
  styleUrls: ['./app-details-extra-info.component.scss']
})
export class AppDetailsExtraInfoComponent implements OnInit {

  @Input() app: App;

  flathubGithubUrl: string = "https://github.com/flathub";

  buildRepoUrl: string;
  buildRepoContributorsUrl: string;
  categoriesList: string;

  constructor() { }

  ngOnInit() {
    this.buildRepoUrl = this.flathubGithubUrl + "/" + this.app.flatpakAppId;
    this.buildRepoContributorsUrl = this.buildRepoUrl + "/graphs/contributors/";

    for (let category of this.app.categories) {
      console.log(category.name);
      if(!this.categoriesList){
        this.categoriesList = category.name;
      }
      else{
        this.categoriesList = this.categoriesList.concat(", " + category.name);
      }

    }
  }

}
