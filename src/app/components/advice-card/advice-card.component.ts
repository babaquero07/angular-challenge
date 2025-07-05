import { Component, input } from '@angular/core';

@Component({
  selector: 'advice-card',
  templateUrl: './advice-card.component.html',
})
export class AdviceCardComponent {
  title = input<Required<string>>();
  description = input<Required<string>>();
  iconClass = input<Required<string>>();
}
