import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import type { Post } from '../interfaces/posts.interface';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor() {}

  private baseURL = environment.baseUrl;
  private http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>(`${this.baseURL}/posts`);
  }

  searchPostsByTitle(title: string) {
    return this.http.get<Post[]>(`${this.baseURL}/posts?title_like=${title}`);
  }
}
