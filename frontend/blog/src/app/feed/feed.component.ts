import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[];
  post: Post;

  constructor(private postService: PostService) {
    this.listPost = [];
    this.post = new Post;
  }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts(){
    this.postService.getPosts().subscribe(
      (data: Post[]) => this.listPost = data )
  }

  sendPost(){
    this.postService.postMensagem(this.post).subscribe((data: Post) =>{
      this.post = data;
      location.assign('/feed');
    });
  }
}
