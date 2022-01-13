import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'store-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  showSearchInput = false;

  onSearch(searchTerm: string): void {
    this.showSearchInput = false;
    this.search.emit(searchTerm);
  }

  onTogleSearch() {
    this.showSearchInput = !this.showSearchInput;
  }

  onCloseSearch() {
    this.showSearchInput = false;
  }

  onTypeSearch() {
    this.showSearchInput = true;
  }

}
