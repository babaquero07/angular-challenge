import { Component, output } from '@angular/core';

@Component({
  selector: 'search-box',
  imports: [],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  searchEvent = output<string>();

  search(value: string) {
    this.searchEvent.emit(value);
  }
}
