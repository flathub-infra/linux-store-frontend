import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Review } from '../../review.model';

@Component({
  selector: 'store-app-details-review',
  templateUrl: './app-details-review.component.html',
  styleUrls: ['./app-details-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDetailsReviewComponent implements OnInit {
  @Input()
  review: Review;

  constructor() {}

  ngOnInit(): void {}
}
