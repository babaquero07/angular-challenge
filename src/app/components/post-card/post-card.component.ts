import { Component, input } from '@angular/core';
import { Post } from '../../interfaces/posts.interface';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {
  post = input<Required<Post>>();
}
