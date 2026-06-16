export interface CommentUser {
    id: number;
    username: string;
  }
  
  export interface comment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: CommentUser;
  }
  
  export interface CommentsResponse {
    comments: comment[];
    total: number;
    skip: number;
    limit: number;
  }