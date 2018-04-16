import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../interfaces/ipost/post.i';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  @Input('posts') posts: IPost[];
  @Input('post') post: IPost;
  @Input('loveIts') loveIts: IPost[];

  constructor() {
  }

  ngOnInit() {
  }

  getLikes(post: IPost) {
    if (post.loveIts < 0) {
      return 'disliked';

    } else if (post.loveIts > 0) {
      return 'liked';
    } else {
      return '';
    }
  }

  getColor(type: 'liked' | 'disliked' | '' ) {
    if (type === 'liked') {
      return { 'list-group-item list-group-item-success': true };
    } else if (type === 'disliked') {
      return { 'list-group-item list-group-item-danger': true };
    } else {
      return { 'list-group-item': true };
    }
  }
}

