import { Component, OnInit } from '@angular/core';
import { MyCommentServiceService } from '../../services/my-comment-service.service';
import { comment } from '../../models/comment';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child-two-sub-menu',
  imports: [CommonModule],
  templateUrl: './child-two-sub-menu.component.html',
  styleUrl: './child-two-sub-menu.component.css'
})
export class ChildTwoSubMenuComponent implements OnInit{
  
  comments: comment[] = [];
  constructor(private commentService : MyCommentServiceService) {}


  ngOnInit(): void {
    this.loadComments();
  }




  loadComments(): void {
    this.commentService.getAllComments().subscribe({
      next: (response) => {
        console.log(response);
        this.comments = response.comments;
      },
      error: (err) => {
        console.error('Comments API Error', err);
      }
    });
  }

}
