import { Component, Input } from '@angular/core';
import { Review } from '../review.model';

@Component({
  selector: 'store-app-details-reviews',
  templateUrl: './app-details-reviews.component.html',
  styleUrls: ['./app-details-reviews.component.scss'],
})
export class AppDetailsReviewsComponent {
  @Input()
  reviews: Review[];
}
