import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-button',
  templateUrl: './post-button.component.html',
  styleUrls: ['./post-button.component.css']
})
export class PostButtonComponent implements OnInit {


  constructor(private postService :PostService) { }

  ngOnInit(): void {
  // this.getPost();
  }
  posts:Post[]=[]
  getPost():void{
    this.postService.getAllPost().subscribe(allposts=> this.posts=allposts);
  }
}
