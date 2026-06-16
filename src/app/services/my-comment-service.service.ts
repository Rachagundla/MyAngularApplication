import { Injectable } from '@angular/core';
import { CommentsResponse } from '../models/comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyCommentServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllComments(): Observable<CommentsResponse> {
    return this.httpClient.get<CommentsResponse>(
      'https://dummyjson.com/comments'
    );
  }
}
