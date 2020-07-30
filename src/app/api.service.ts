import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseApiUrl } from './utils/constants';
import { Observable } from 'rxjs';
import { IPost } from './interfaces/post.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    // get all the posts;
    return this.http.get(`${baseApiUrl}posts?_start=0&_limit=10`);
  }
  getPost(postId: string) {
    return this.http.get(`${baseApiUrl}posts/${postId}`);
  }
  getAllCommentsForPost(postId: number) {
    return this.http.get(`${baseApiUrl}posts/${postId}/comments`);
  }
}
