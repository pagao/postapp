import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  listIPost: IPost[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe((data) => {
      this.listIPost.push(...data);
    });
  }
}
