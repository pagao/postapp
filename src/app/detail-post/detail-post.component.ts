import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss'],
})
export class DetailPostComponent implements OnInit {
  public valeur: any;
  constructor(
    private activated: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe((v) => {
      this.getDetail(v.id);
    });
  }

  getDetail(postId: string) {
    this.apiService.getPost(postId).subscribe((value) => (this.valeur = value));
  }
}
