import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { App } from '../shared/app.model';
import { FlathubApiService } from '../flathub-api.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {

  @Input()
  app: App;

  constructor(
    private flathubApiService: FlathubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {

    console.log('Executa onInit');

    this.route.params.forEach((params: Params) => {
      let id: string = params['id'];

      console.log('id=' + id);

      this.flathubApiService.getApp(id)
        .then(app => this.app = app);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
