import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';

import { App } from '../shared/app.model';
import { FlathubApiService } from '../flathub-api.service';

@Component({
  selector: 'flathub-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {

  @Input()
  app: App;

  constructor(
    private http: Http,
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

  install() {


    /*var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "hello world.txt");


    let blob: Blob = res.blob();
    window['saveAs'](blob, 'test.pdf');*/
  }

}
