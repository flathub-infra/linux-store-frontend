import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'store-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Input() public timeToRedirectInSeconds = 30;

  constructor(private router: Router) {
    this.waitForRedirect().then(() => {
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit() {}

  waitForOneSecond(): Promise<Boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  async waitForRedirect(): Promise<Boolean> {
    while (this.timeToRedirectInSeconds) {
      await this.waitForOneSecond();
      this.timeToRedirectInSeconds--;
    }
    return true;
  }
}
