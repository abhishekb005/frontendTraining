import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService :PostService) { }

  ngOnInit(): void {
    this.getPost();
  }
  @Input() post?:Post[];
  
  getPost():void{
    this.postService.getAllPost().subscribe(allposts=> this.post=allposts);
  }

}
