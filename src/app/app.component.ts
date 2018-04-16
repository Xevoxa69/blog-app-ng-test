import { Component } from '@angular/core';
import { IPost } from './interfaces/ipost/post.i';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';
  posts: IPost[] = [
    {
      title: 'post 1',
      content: 'Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum ',
      loveIts: 2,
      created_at: new Date('2018/04/12')
    },
    {
      title: 'post 2',
      content: 'Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum ',
      loveIts: 12,
      created_at: new Date('2018/04/12')
    },
    {
      title: 'post 3',
      content: 'Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum ',
      loveIts: -1,
      created_at: new Date('2018/04/12')
    }
  ];
}
