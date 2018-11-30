import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'store-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output('search') search: EventEmitter<string> = new EventEmitter<string>();

  showSearchInput = false;
  searchActive = false;
  isScrolled = false;

  ngOnInit() {
    document.addEventListener('scroll', () => {
      var top = window.scrollY;

      if (top > 30 && !this.isScrolled) {
        this.isScrolled = true
      }
      else if (top < 30 && this.isScrolled) {
        this.isScrolled = false;
      }
    })
  }

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

}
