import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';

import {App} from '../../shared/app.model';
import {Category} from '../category.model';
import {LinuxStoreApiService} from '../../linux-store-api.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'store-app-details-extra-info',
  templateUrl: './app-details-extra-info.component.html',
  styleUrls: ['./app-details-extra-info.component.scss']
})
export class AppDetailsExtraInfoComponent implements OnInit {

  @Input() app: App;
  @Output('donate') donate: EventEmitter<App> = new EventEmitter<App>();

  flathubGithubUrl = 'https://github.com/flathub';
  buildRepoUrl: string;
  buildRepoContributorsUrl: string;
  categoriesList: string;
  showLicenseDialog: boolean;
  license: string;
  mainCategory: Category;
  appIsPublishedByUpstream: boolean = false;
  publisherName: String = '';

  constructor(
    private linuxStoreApiService: LinuxStoreApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    if (this.app) {

      //FIXME: quick hack until a better solution is developed for https://github.com/flathub/linux-store-frontend/issues/213
      if (this.app.flatpakAppId === 'org.mozilla.firefox'){
        this.appIsPublishedByUpstream = true;
        this.app.developerName = 'Mozilla';
        this.publisherName = 'Mozilla';
      }

      this.buildRepoUrl = `${this.flathubGithubUrl}/${this.app.flatpakAppId}`;
      this.buildRepoContributorsUrl = `${this.buildRepoUrl}/graphs/contributors/`;

      if (this.app.projectLicense) {

        if (this.app.projectLicense.indexOf('LicenseRef-proprietary') !== -1) {
          this.license = 'Proprietary';
          this.showLicenseDialog = false;
        } else {
          this.license = this.app.projectLicense;
          this.showLicenseDialog = this.app.projectLicense.length > 30;
        }

      } else {
        this.license = '-'
      }

      if (this.app.categories) {
        for (const category of this.app.categories) {
          this.setMainCategory(category.name);
        }
      }
    }
  }

  setMainCategory(categoryId: string): void {
    let tempCategory: Category;

    this.linuxStoreApiService.getCategory(categoryId)
      .subscribe(category => { tempCategory = category; });

    if (tempCategory) {
      this.mainCategory = tempCategory;
    }
  }

  onDonate() {
    this.donate.emit(this.app);
  }

  onShowMoreLicenseInformationClick() {
    this.dialog.open(AppDetailsExtraInfoLicenseModalComponent, {
      width: '250px',
      data: this.license
    });
  }

}

// @ts-ignore
@Component({
  selector: 'store-app-details-extra-info-license-modal',
  templateUrl: 'app-details-extra-info-license-modal.component.html',
})
export class AppDetailsExtraInfoLicenseModalComponent {

  licenses: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string) {
    data = data.toUpperCase();

    const fields = data.split('AND');

    this.licenses = fields;

  }

}
