import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Review } from '../../review.model';

@Component({
  selector: 'store-app-details-reviews-summary',
  templateUrl: './app-details-reviews-summary.component.html',
  styleUrls: ['./app-details-reviews-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDetailsReviewsSummaryComponent implements OnInit {
  @Input()
  reviews: Review[];

  averageRating(): number {
    return (
      this.reviews.reduce((acc, review) => acc + review.rating, 0) /
      this.reviews.length
    );
  }

  oneStarReviews(): number {
    return this.reviews.filter((review) => review.rating === 20).length;
  }

  twoStarReviews(): number {
    return this.reviews.filter((review) => review.rating === 40).length;
  }

  threeStarReviews(): number {
    return this.reviews.filter((review) => review.rating === 60).length;
  }

  fourStarReviews(): number {
    return this.reviews.filter((review) => review.rating === 80).length;
  }

  fiveStarReviews(): number {
    return this.reviews.filter((review) => review.rating === 100).length;
  }

  totalReviews(): number {
    return this.reviews.length;
  }

  getChartData(): { name: string; value: number }[] {
    return [
      { name: '5', value: this.fiveStarReviews() },
      { name: '4', value: this.fourStarReviews() },
      { name: '3', value: this.threeStarReviews() },
      { name: '2', value: this.twoStarReviews() },
      { name: '1', value: this.oneStarReviews() },
    ];
  }

  colorScheme = {
    domain: ['#4a86cf'],
  };

  constructor() {}

  ngOnInit(): void {}
}
