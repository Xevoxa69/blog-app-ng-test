import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost/post.i';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {


  // @Input correspond à un passage de paramètre
  @Input('post') post: IPost;
  @Input('loveIts') loveIts: IPost;

  today = Date.now();

  constructor() {
  }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts < 0) {
      return 'red';
    } else if (this.post.loveIts > 0) {
      return 'green';
    }
  }

  action(type: 'like' | 'dislike') {
    if (type === 'like') {
      this.post.loveIts++;
    } else {
      this.post.loveIts--;
    }
  }
}
