import { Component, input } from '@angular/core';
import { Post } from '../../interfaces/posts.interface';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  imports: [PostCardComponent],
})
export class PostsListComponent {
  posts = input<Required<Post[]>>([]);
}
