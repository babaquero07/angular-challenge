import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { Post } from './interfaces/posts.interface';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { PostsService } from './services/posts.service';
import { LoadingComponent } from './components/loading/loading.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AdviceCardComponent } from './components/advice-card/advice-card.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    SearchBoxComponent,
    FooterComponent,
    LoadingComponent,
    PostsListComponent,
    AdviceCardComponent,
    FilterPipe,
  ],
})
export class App implements OnInit {
  postsService = inject(PostsService);

  posts = signal<Post[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  searchTerm = new Subject<string>();
  searchQuery = signal<string>('');

  ngOnInit(): void {
    this.loadPosts();

    this.searchTerm
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => {
          this.loading.set(true);
          return this.postsService.searchPostsByTitle(query);
        })
      )
      .subscribe({
        next: (posts) => {
          this.posts.set(posts);
          this.loading.set(false);
        },
        error: (error) => {
          console.log('🚀 ~ App ~ ngOnInit ~ error:', error);
          this.error.set('Error al obtener los posts por título');
        },
      });
  }

  loadPosts() {
    this.loading.set(true);

    this.postsService.getPosts().subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set('Error al obtener los posts');
        this.loading.set(false);
      },
    });
  }

  search(value: string) {
    this.searchQuery.set(value);
    this.searchTerm.next(value);
  }
}
