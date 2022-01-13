import { Component, ElementRef, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'store-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchBox') searchInput: ElementRef;

  showSearchInput = false;

  onSearch(searchTerm: string): void {
    this.showSearchInput = false;
    this.search.emit(searchTerm);
  }

  onTogleSearch() {
    this.showSearchInput = !this.showSearchInput;
    if (this.showSearchInput) this.searchInput.nativeElement.focus();
  }

  onCloseSearch() {
    this.showSearchInput = false;
  }

  onTypeSearch() {
    this.showSearchInput = true;
  }

}
