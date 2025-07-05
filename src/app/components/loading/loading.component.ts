import { Component } from '@angular/core';

@Component({
  selector: 'loading',
  template: `
    <div
      class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"
    ></div>
  `,
})
export class LoadingComponent {}
