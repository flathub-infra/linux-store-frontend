import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'store-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output('search')
  search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onSearch(searchTerm: string): void {
    this.search.emit(searchTerm);
  }

}
