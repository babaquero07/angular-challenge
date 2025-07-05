import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/posts.interface';

@Pipe({
  name: 'filterPost',
})
export class FilterPipe implements PipeTransform {
  transform(posts: Post[], searchQuery: string): Post[] {
    if (!searchQuery) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter((post) => post.title.toLowerCase().includes(query));
  }
}
