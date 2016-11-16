import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Http, BrowserXhr, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { saveAs } from "file-saver";

import { App } from '../shared/app.model';
import { Review } from '../shared/review.model';
import { FlathubApiService } from '../flathub-api.service';

@Component({
  selector: 'flathub-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {

  @Input()
  app: App;

  reviews: Review[];
  selectedReview: Review;

  public pending: boolean = false;

  constructor(
    private http: Http,
    private flathubApiService: FlathubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getApp(id: string): void {
    this.flathubApiService.getApp(id).then(app => this.app = app);
  }

  getReviews(id: string): void {
    let app_id: string = id.concat('.desktop');
    this.flathubApiService.getReviews(app_id)
      .then(reviews => this.reviews = reviews);
  }

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {

      let id: string = params['id'];
      console.log('id=' + id);
      this.getApp(id);
      this.getReviews(id);

    });
  }

  goBack(): void {
    this.location.back();
  }

  onSelect(review: Review): void {
    console.log('SelectedReview = ' + review.app_id);
    this.selectedReview = review;
  }

  isSelected(review: Review): boolean {
    console.log('review selected:' + review.app_id);
    return review.app_id === this.selectedReview.app_id;
  }


  // This method has been adapted from Stack Overflow
  // Question: http://stackoverflow.com/questions/35368633/angular-2-download-pdf-from-api-and-display-it-in-view
  // Answer by spock: http://stackoverflow.com/users/435743/spock

  public install() {

    // Xhr creates new context so we need to create reference to this
    let self = this;

    // Status flag used in the template.
    this.pending = true;

    // Create the Xhr request object
    let xhr = new XMLHttpRequest();
    let url = this.app.flatpakRefUrl;

    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    // Xhr callback when we get a result back
    // We are not using arrow function because we need the 'this' context
    xhr.onreadystatechange = function () {

      // We use setTimeout to trigger change detection in Zones
      setTimeout(() => { self.pending = false; }, 0);

      // If we get an HTTP status OK (200), save the file using fileSaver
      if (xhr.readyState === 4 && xhr.status === 200) {
        var blob = new Blob([this.response], { type: 'application/vnd.flatpak.ref' });
        var filename: string = self.app.flatpakRefUrl.substring(url.lastIndexOf('/') + 1);
        saveAs(blob, filename);
      }
    };

    // Start the Ajax request
    xhr.send();
  }


}
